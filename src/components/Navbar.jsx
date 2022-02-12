/* This example requires Tailwind CSS v2.0+ */
import ActionButton from "./ActionButton";
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Blog", href: "#", current: false },
  { name: "Community", href: "#", current: false },
  { name: "Ecosystem", href: "#", current: false },
];

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-black">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="." className="flex">
          <svg height="40" width="40">
            <defs>
              <clipPath id="cut-off-bottom">
                <rect x="0" y="0" width="40" height="20" />
              </clipPath>
              <clipPath id="cut-off-top">
                <rect x="0" y="20" width="40" height="20" />
              </clipPath>
            </defs>
            <circle
              cx="20"
              cy="20"
              r="10"
              fill="#C517F1"
              clipPath="url(#cut-off-bottom)"
            />
            <circle
              cx="20"
              cy="20"
              r="10"
              fill="#014FFF"
              clipPath="url(#cut-off-top)"
            />
          </svg>
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
            Key
          </span>
        </a>
        <div className="flex md:order-2">
          <ActionButton />
          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
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
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-4"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {navigation.map((item) => (
              <li>
                <a
                  href={item.href}
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
