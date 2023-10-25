export function LargeCollectionSnippet() {
  return (
    <div className="bg-white border border-slate-300 p-4 rounded-md">
      <div className="aspect-square max-w-full">
        <img
          src="https://iiif.wellcomecollection.org/thumbs/b12024727_0001.jp2/full/1024,/0/default.jpg"
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <h2 className="font-semibold text-2xl text-slate-700 my-5">
          A Collection title
        </h2>
        <div className="text-slate-500 my-2">1906, Oil on canvas</div>
        <div className="text-slate-500 my-2">&copy; Some copyright</div>
        <div className="text-teal-700">
          <a href="#">Explore collection</a>
        </div>
      </div>
    </div>
  );
}
