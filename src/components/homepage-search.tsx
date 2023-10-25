export function HomepageSearch() {
  return (
    <div className="bg-red-100 flex h-page">
      <div className="absolute h-page left-0 right-0 z-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-page object-cover w-full grayscale"
          src="https://images.unsplash.com/photo-1476990789491-712b869b91a5?auto=format&fit=crop&q=80&w=2530&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="absolute h-page left-0 right-0 z-2 bg-opacity-50 bg-slate-600"></div>
      <div className="w-page z-3 relative">
        <div className="pt-96 text-white max-w-2xl">
          <section className="mb-24">
            <h1 className="text-5xl text-center">
              Discover the IIIF I have put together here
            </h1>
            <p className="text-2xl text-center my-4">Search and share stuff</p>
          </section>
          <form action="/search" className="w-full flex">
            <input
              className="flex-1 p-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black"
              type="text"
              name="q"
              placeholder="Search 10+ items"
            />
            <button className="bg-blue-600 hover:bg-blue-600 text-lg font-light text-white px-8 py-2 rounded-r-lg">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
