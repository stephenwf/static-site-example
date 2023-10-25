import { client, loadJson } from "@/iiif";
import { getValue } from "@iiif/helpers";

export default async function TopicsPage() {
  const topics: any = await loadJson(client.endpoints.topics);

  return (
    <div>
      <h3 className="text-slate-800 text-3xl my-12 text-center place-items-center">
        Topics
      </h3>
      {topics.items.map((item: any) => (
        <div key={item.id}>
          <a href={item["hss:slug"]} className="text-blue-500 hover:underline">
            <h4>{getValue(item.label)}</h4>
          </a>
        </div>
      ))}
    </div>
  );
}
