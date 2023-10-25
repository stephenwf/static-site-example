export function Footer() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/4 mb-12 lg:mb-0">
            <div className="flex gap-2">
              <a href="/">
                <svg viewBox="0 0 42 28" height="28">
                  <path
                    fill="#87909D"
                    d="M0 13.343 13.343 0l13.343 13.343-13.343 13.343z"
                  />
                  <path
                    fill="#87909D"
                    d="M12.137 13.346 25.48.003l13.343 13.343L25.48 26.69z"
                  />
                  <path
                    fill="#4A5567"
                    d="m12.104 13.348 7.311-7.311 7.312 7.311-7.312 7.312z"
                  />
                </svg>
              </a>
              <a href="/" className="text-lg text-white">
                Headless static site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
