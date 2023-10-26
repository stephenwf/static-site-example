import { client, loadJson } from "@/iiif";
import { getValue } from "@iiif/helpers";
import Link from "next/link";

export default async function TopicsPage() {
  const topics: any = await loadJson(client.endpoints.topics);

  return (
    <div>
      <ul aria-label="breadcrumbs" className="flex mb-4">
        <li className="mr-2 text-highlight">
          <a href="/">Home</a>
        </li>
        <li className="mr-2">
          <span>Topic types</span>
        </li>
      </ul>
      <h3 className="text-slate-800 text-3xl my-12 text-center place-items-center ">
        Topic Types
      </h3>
      {topics.items.map((item: any) => (
        <Link key={item.id} href={item["hss:slug"]} className="text-highlight">
        <div className="group border border-gray-300 p-4 m-4 rounded hover:border-highlight flex justify-between items-center">
            <h4 className="text-gray-600 font-semibold text-xl capitalize">{getValue(item.label)}</h4>
          <p className="hidden group-hover:block text-highlight text-sm" >Explore Topic Type</p>
        </div>
        </Link>
      ))}
    </div>
  );
}
