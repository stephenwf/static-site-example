export function CollectionPageFeature() {
  return (
    <>
      <div className="bg-red-100 flex h-page">
        <div className="absolute h-page left-0 right-0 z-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-page object-cover w-full grayscale"
            src="https://iiif.wellcomecollection.org/thumbs/b12024727_0001.jp2/full/1024,/0/default.jpg"
            alt=""
          />
        </div>
        <div className="absolute h-page left-0 right-0 z-2 bg-opacity-20 bg-slate-800"></div>
        <div className="w-page z-3 relative flex items-center">
          <div className="text-white">
            <section className="mb-24">
              <div className="text-xs mb-2 uppercase text-white">
                Collection
              </div>
              <h1 className="text-5xl">A collection name</h1>
              <p className="text-xl my-4">A sub title for the collection</p>
              <a
                href="#"
                className="bg-teal-500 px-5 py-2 rounded-full hover:bg-teal-600 transition-colors mt-5 inline-block"
              >
                Explore collection
              </a>
            </section>
          </div>
        </div>
      </div>
      <div
        className="relative bg-white border rounded p-8"
        style={{ top: -100 }}
      >
        <h2 className="text-3xl font-semibold text-slate-800 mb-5">
          The title of the collection / exhibition
        </h2>
        <p className="max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          ipsum eu nunc commodo posuere et sit amet ligula. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc
          commodo posuere et sit amet ligula. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere
          et sit amet ligula.
        </p>
      </div>
    </>
  );
}
