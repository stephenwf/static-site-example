import { fileSystemLoader } from "@/blocks/server";
import { Slot } from "@/blocks/slot";
import { SlotContext } from "@/blocks/slot-context";

export async function ArticlePage({
  manifest,
  article,
}: {
  manifest: string;
  article: string;
}) {
  const context = { manifest, article };
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
          href={`/${manifest}`}
        >
          Back to manifest
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

      <SlotContext name="manifest" value={manifest}>
        <SlotContext name="article" value={article}>
          <Slot context={context} name="article-header" />
          <Slot context={context} name="article" />
          <Slot context={context} name="article-footer" />
        </SlotContext>
      </SlotContext>
    </div>
  );
}
