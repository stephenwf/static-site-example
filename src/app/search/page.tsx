import { getSearchQuery } from "@/iiif";

export default async function Search(props: { searchParams?: { q?: string } }) {
  const search = props.searchParams?.q || "";
  const query = await getSearchQuery();

  let results = [];
  if (search) {
    results = await query.all({ $search: search });
  }

  return (
    <>
      <div className="mb-4 px-4 border-b border-slate-300 py-5">
        <h1 className="text-2xl text-slate-900">
          Search: <span className="font-bold">{search}</span>
        </h1>
        <form className="flex">
          <input
            type="text"
            defaultValue={search}
            name="q"
            className="border border-slate-300 p-2 flex-1"
          />
        </form>
      </div>
      <div className="results-grid gap-4">
        {results.map((result) => (
          <a
            key={result.slug}
            href={result.slug}
            className="flex flex-col max-w-md"
          >
            <div className="flex-1 bg-gray-200 rounded overflow-hidden aspect-square">
              <img
                alt=""
                src={result.thumbnail}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-3">
              <h3>{result.label}</h3>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
