import { client, loadJson } from "@/iiif.ts";
import { getValue } from "@iiif/helpers";

export default async function AllCollections() {
  const collection = await loadJson<any>(client.endpoints.top);

  const itemsWithoutTopics = collection.items.filter(
    (t: any) => t["hss:slug"].startsWith("topics") === false,
  );

  return (
    <div>
      <h2 className="text-slate-800 text-2xl mb-6  place-items-center">
        All collections
      </h2>
      {itemsWithoutTopics.map((item: any) => (
        <div key={item.id}>
          <a
            href={`/collections/${item["hss:slug"]}`}
            className="text-blue-500 hover:underline"
          >
            {getValue(item.label)}
          </a>
        </div>
      ))}
    </div>
  );
}
