import { client, loadJson } from "@/iiif";
import { getThumbnail, getValue } from "@iiif/helpers";

export default async function ManifestListing(props: {
  searchParams?: { page?: string };
}) {
  const collection = await loadJson<any>(client.endpoints.manifests);
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

  const page = parseInt(props.searchParams?.page || "1", 10);
  const perPage = 24;
  const start = (page - 1) * perPage;

  const items = collection.items.slice(start, start + perPage);

  const hasNextPage = start + perPage < collection.items.length;
  const hasPreviousPage = start > 0;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{getValue(collection.label)}</h1>
      <p className="mb-4">{getValue(collection.summary)}</p>

      <div className="flex w-full p-4">
        {hasPreviousPage && (
          <div className="mr-auto">
            <a
              href={`?page=${page - 1}`}
              className="text-blue-500 hover:text-blue-700"
            >
              Previous page
            </a>
          </div>
        )}
        {hasNextPage && (
          <div className="ml-auto">
            <a
              href={`?page=${page + 1}`}
              className="text-blue-500 hover:text-blue-700"
            >
              Next page
            </a>
          </div>
        )}
      </div>

      <div className="results-grid gap-4">
        {items.map(async (item: any) => {
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
        })}
      </div>

      <div className="flex w-full p-4">
        {hasPreviousPage && (
          <div className="mr-auto">
            <a
              href={`?page=${page - 1}`}
              className="text-blue-500 hover:text-blue-700"
            >
              Previous page
            </a>
          </div>
        )}
        {hasNextPage && (
          <div className="ml-auto">
            <a
              href={`?page=${page + 1}`}
              className="text-blue-500 hover:text-blue-700"
            >
              Next page
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
