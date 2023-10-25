export function CollectionSnippet() {
  return (
    <a
      href="#"
      className="p-3 flex h-24 bg-white shadow border rounded border-transparent hover:border-green-800 gap-4 items-center mb-4 max-w-3xl mx-auto"
    >
      <div className="aspect-square max-h-full">
        <img
          src="https://deriv.nls.uk/dcn4/7441/74419393.4.jpg"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1">
        <h2 className="font-semibold text-lg text-slate-800">
          Collection title
        </h2>
      </div>
      <div className="text-green-800 text-sm">Explore collection</div>
    </a>
  );
}
