import { client, loadJson } from "@/iiif";
import { Slot } from "@/blocks/slot";
import { Blocks } from "@/components/directory";
import { SlotContext } from "@/blocks/slot-context";
import { ArticlePage } from "@/components/article-page";
import { fileSystemLoader } from "@/blocks/server";
import ManifestViewer from "@/components/manifest-viewer";

export default async function ManifestPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const isArticle = params.slug.includes("article");

  if (isArticle) {
    const manifestPath = ["manifests"];
    const articlePath = [];
    let isArticle = false;
    for (const slug of params.slug) {
      if (slug === "article") {
        isArticle = true;
        continue;
      }
      if (isArticle) {
        articlePath.push(slug);
        continue;
      }
      manifestPath.push(slug);
    }
    return (
      <ArticlePage
        manifest={manifestPath.join("/")}
        article={articlePath.join("/")}
      />
    );
  }

  const fullPath = ["manifests", ...params.slug].join("/");
  const manifest = await client.loadManifest(fullPath);
  const subContext = await fileSystemLoader.querySubContext({
    manifest: fullPath,
  });

  const idForClient = manifest.id;

  const meta = await loadJson(manifest.meta);

  return (
    <div>
      <SlotContext name="manifest" value={fullPath}>
        <ul aria-label="breadcrumbs" className="flex mb-4">
          <li className="mr-2">
            <a href="/">Home</a>
          </li>
          <li className="mr-2">
            <a href="/manifests">Manifests</a>
          </li>
        </ul>
        <Slot context={{ manifest: fullPath }} name="manifest-title">
          <Blocks.ManifestTitle />
          <ManifestViewer manifest={idForClient} height={800} />
        </Slot>
      </SlotContext>
    </div>
  );
}
