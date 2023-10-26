import { client, getSlug, loadJson } from "@/iiif.ts";
import { FourGrid } from "@/components/four-grid.tsx";
import { ManifestCard } from "@/components/manifest-card.tsx";
import { getThumbnail, getValue, fetch } from "@iiif/helpers";

async function getThumb(resource: any) {
  if (!resource.thumbnail) {
    return undefined;
  }
  const t = await getThumbnail(resource.thumbnail[0], {
    width: 512,
    height: 512,
    dereference: true,
  });
  if (t.best) {
    return t.best.id;
  }
  return undefined;
}

export default async function CollectionPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slugParts = params.slug.map((s) => decodeURIComponent(s || ""));

  if (slugParts[0] !== "stores") {
    slugParts.unshift("collections");
  }

  const fullPath = [...slugParts].join("/");

  const info = await client.loadCollection(fullPath);

  const collection = info.collection
    ? await loadJson<any>(info.collection)
    : await fetch(info.id);

  return (
    <div>
      Collection page
      <FourGrid columns={4}>
        {await Promise.all(
          collection.items.map(async (manifestOrCollection: any) => {
            return (
              <ManifestCard
                key={manifestOrCollection.id}
                link={await getSlug(manifestOrCollection)}
                thumbnail={await getThumb(manifestOrCollection)}
                label={getValue(manifestOrCollection.label)}
              />
            );
          }),
        )}
      </FourGrid>
    </div>
  );
}
