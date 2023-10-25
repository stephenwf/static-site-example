import { client, loadJson } from "@/iiif";
import { getThumbnail, getValue } from "@iiif/helpers";

export default async function TopicPage(props: {
  params: { topicType: string; topic: string };
}) {
  const topic = await client.loadTopic(
    props.params.topicType,
    props.params.topic,
  );
  const collection: any = await loadJson(topic.collection);

  async function getThumb(resource: any) {
    if (!resource.thumbnail) {
      return null;
    }
    const t = await getThumbnail(resource.thumbnail[0], {
      width: 256,
      height: 256,
    });
    if (t.best) {
      return t.best.id;
    }
    return null;
  }

  return (
    <div>
      <h3 className="text-slate-800 text-3xl my-12 text-center place-items-center">
        {getValue(collection.label)}
      </h3>

      <div className="results-grid gap-4">
        {await Promise.all(
          collection.items.map(async (item: any) => {
            const thumb = await getThumb(item);
            return (
              <a
                key={item.id}
                href={`/${item["hss:slug"]}`}
                className="flex flex-col max-w-md group"
              >
                <div className="flex-1 bg-gray-200 rounded overflow-hidden aspect-square p-2">
                  {thumb ? (
                    <img src={thumb} className="w-full h-full object-contain" />
                  ) : null}
                </div>
                <div className="p-3">
                  <h3>{getValue(item.label)}</h3>
                </div>
              </a>
            );
          }),
        )}{" "}
      </div>
    </div>
  );
}
