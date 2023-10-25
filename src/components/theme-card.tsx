export function ThemeCard() {
  return (
    <div className="h-96 bg-red-500 relative">
      <div className="absolute z-1 inset-0 bg-black">
        <img
          className="h-full object-cover w-full opacity-40"
          src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="relative z-2 p-8 text-center text-white flex flex-col h-full">
        <div className="flex flex-col flex-1 h-full justify-evenly">
          <div className="uppercase text-lg mb-8">Music</div>
          <div>
            Explore recordings, sheet music, instruments and musical styles, as
            well as composers and performers
          </div>
          <hr className="w-1/2 mx-auto my-8" />
        </div>
        <div className="">
          <a
            className="border rounded border-white p-2 hover:bg-white hover:bg-opacity-10"
            href="#"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
}
