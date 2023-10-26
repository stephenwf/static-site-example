import { client, loadJson } from "@/iiif";
import { getValue } from "@iiif/helpers";
import Link from "next/link";

export default async function TopicTypePage(props: {
  params: { topicType: string };
}) {
  const topicType = await client.loadTopicType(props.params.topicType);
  const collection: any = await loadJson(topicType.collection);

  return (
    <div>
      <ul aria-label="breadcrumbs" className="flex mb-4">
        <li className="mr-2 text-highlight">
          <a href="/">Home</a>
        </li>
        <li className="mr-2 text-highlight">
          <a href="/topics">Topic types</a>
        </li>
        <li className="mr-2">
          <span>{getValue(collection.label)}</span>
        </li>
      </ul>
      <h3 className="text-slate-800 text-3xl my-12 text-center place-items-center">
        Topic: <span className="text-highlight capitalize font-medium underline">{getValue(collection.label)} </span>
      </h3>
      {collection.items.map((topic: any) => (
        <Link key={topic.id}  href={`/${topic["hss:slug"]}`} className="text-highlight">
          <div className="group border border-gray-300 p-4 m-4 rounded hover:border-highlight flex justify-between items-center">
            <h4 className="text-gray-600 font-semibold text-xl capitalize">{getValue(topic.label)}</h4>
            <p className="hidden group-hover:block text-highlight text-sm" >Explore Topic</p>
          </div>
        </Link>
        ))}
      </div>
  );
}
