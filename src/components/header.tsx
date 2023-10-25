"use client";

import { usePathname } from "next/navigation";
export function Header() {
  const pathname = usePathname();

  const isManifestsPage = pathname.startsWith("/manifests");
  const isTopicsPage = pathname.startsWith("/topics");
  const isSearchPage = pathname.startsWith("/search");

  const active = "text-bold underline";

  return (
    <header className="text-slate-800">
      <div className="max-w-[1440px] mx-auto px-2 flex gap-2 items-center h-16">
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
        <a href="/" className="text-lg text-slate-800">
          Headless static site
        </a>

        <div className="mr-auto pl-10">
          <ul className="flex gap-4">
            <li>
              <a
                href="/manifests"
                className={`text-md text-blue-900 hover:text-blue-500 ${
                  isManifestsPage && active
                }`}
              >
                Manifests
              </a>
            </li>
            <li>
              <a
                href="/topics"
                className={`text-md text-blue-900 hover:text-blue-500 ${
                  isTopicsPage && active
                }`}
              >
                Topics
              </a>
            </li>
            <li>
              <a
                href="/search"
                className={`text-md text-blue-900 hover:text-blue-500 ${
                  isSearchPage && active
                }`}
              >
                Search
              </a>
            </li>
          </ul>
        </div>

        <div>
          <form
            action="/search"
            className="text-md bg-slate-100 flex rounded-full h-10"
          >
            <input
              type="text"
              className="bg-transparent px-3 w-96 focus:outline-none focus:border-blue-600 border-transparent border-2 rounded-full"
              name="q"
              placeholder="Search for an manifest or topic"
            />
            <button
              className="px-5 text-slate-500 hover:bg-slate-200 rounded-full m-1 text-xs"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
