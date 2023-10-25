import { client, loadJson } from "@/iiif";
import { getValue } from "@iiif/helpers";

export default async function TopicTypePage(props: {
  params: { topicType: string };
}) {
  const topicType = await client.loadTopicType(props.params.topicType);
  const collection: any = await loadJson(topicType.collection);

  return (
    <div>
      <h3 className="text-slate-800 text-3xl my-12 text-center place-items-center">
        {getValue(collection.label)}
      </h3>
      {collection.items.map((topic: any) => (
        <div key={topic.id}>
          <a
            href={`/${topic["hss:slug"]}`}
            className="text-blue-500 hover:underline"
          >
            <h4>{getValue(topic.label)}</h4>
          </a>
        </div>
      ))}
    </div>
  );
}
