import { fileSystemLoader } from "@/blocks/server";
import { SlotContext } from "@/blocks/slot-context";
import { Slot } from "@/blocks/slot";

export default async function ArticlePage(props: {
  params: { slug: string[] };
}) {
  const context = { article: props.params.slug.join("/") };

  const slotResponse = await fileSystemLoader.query(context, [
    "article-header",
    "article",
    "article-footer",
  ]);

  if (slotResponse.isEmpty && process.env.NODE_ENV === "production") {
    return (
      <div>
        <h1 className="text-slate-800 text-3xl my-12 text-center place-items-center">
          Article not found
        </h1>
        <a
          className="text-blue-500 hover:underline text-center block"
          href={`/`}
        >
          Back to home
        </a>
      </div>
    );
  }

  return (
    <div>
      {slotResponse.isEmpty ? (
        <div
          className="bg-blue-100 border rounded border-blue-500 text-blue-700 px-4 py-3"
          role="alert"
        >
          <p className="font-bold">New article</p>
          <p className="text-sm">
            No article exists yet, add blocks to create one
          </p>
        </div>
      ) : null}

      <SlotContext name="article" value={context.article}>
        <Slot context={context} name="article-header" />
        <Slot context={context} name="article" />
        <Slot context={context} name="article-footer" />
      </SlotContext>
    </div>
  );
}
