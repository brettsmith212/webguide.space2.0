import Link from "next/link";
import { useRouter } from "next/router";

const activeLink =
  "block rounded bg-cyan-500 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-cyan-500";

const inactiveLink =
  "block rounded py-2 pl-3 pr-4 text-gray-200 hover:bg-cyan-100 hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-white";

const Header: React.FC = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <nav className="rounded border-gray-200  bg-neutral-800 px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
            WebGuide
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-neutral-500 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-neutral-700 bg-neutral-800 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-neutral-800 md:text-sm md:font-medium ">
            <li>
              <Link
                href="/"
                className={currentRoute == "/" ? activeLink : inactiveLink}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/theguide"
                className={
                  currentRoute == "/theguide" ? activeLink : inactiveLink
                }
              >
                The Guide
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={currentRoute == "/blog" ? activeLink : inactiveLink}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={currentRoute == "/about" ? activeLink : inactiveLink}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
