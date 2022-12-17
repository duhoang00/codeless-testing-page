export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center border-b-2 px-4 border-gray-100 py-6 md:justify-start md:space-x-10 app-header-nav">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="/">
            <span className="sr-only">Codeless testing</span>
            <img
              loading="lazy"
              className="h-12 w-auto"
              width="150"
              height="20"
              src="src/assets/logo/codeless-color-2-short.png"
              alt="Codeless testing"
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            data-role="mobile-menu-toggle"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open menu</span>

            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex space-x-10">
          <div className="relative">
            <button
              data-flyout-menu="#product-menu"
              type="button"
              // data-active-className="text-gray-900"
              // data-inactive-className="text-gray-500"
              className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span>Product</span>
              <svg
                // data-active-className="text-gray-600"
                // data-inactive-className="text-gray-400"
                className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div id="product-menu" className="hidden relative z-10">
              <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        ></path>
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          How Codeless testing works
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Take a tour of Codeless testing. Learn how to record
                          and manage tests.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                        ></path>
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Recording Tests
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          See how creating even advanced tests is dramatically
                          easier with Codelss testing.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        ></path>
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Running tests
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Run tests manually, schedule them or incorporate them
                          into your development workflow.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        ></path>
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Integrations
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Codeless testing works in your existing workflow for
                          notifications and development pipeline.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <button
              data-flyout-menu="#compare-menu"
              type="button"
              // data-active-className="text-gray-900"
              // data-inactive-className="text-gray-500"
              className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span>Compare to</span>
              <svg
                // data-active-className="text-gray-600"
                // data-inactive-className="text-gray-400"
                className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div id="compare-menu" className="hidden relative z-10">
              <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="256px"
                        height="269px"
                        viewBox="0 0 256 269"
                        version="1.1"
                        preserveAspectRatio="xMidYMid"
                      >
                        <g>
                          <path
                            d="M234.152874,0.00343857381 C234.808025,-0.0379575263 235.429647,0.297028821 235.755341,0.866994098 C236.081036,1.43695938 236.054047,2.14258032 235.685767,2.68600216 L235.685767,2.68600216 L169.388124,92.7434941 C168.902258,93.2919104 168.204691,93.6058549 167.472007,93.6058549 C166.739323,93.6058549 166.041756,93.2919104 165.55589,92.7434941 L165.55589,92.7434941 L142.179265,66.684305 C141.608302,66.0916135 140.79919,65.7901017 139.979599,65.86461 C139.160008,65.9391182 138.418531,66.3815927 137.963808,67.0675283 L137.963808,67.0675283 L123.784543,85.0790267 C123.335922,86.0932522 123.483294,87.2722249 124.167766,88.1448137 L124.167766,88.1448137 L166.322337,131.832278 C166.808203,132.380694 167.50577,132.694639 168.238454,132.694639 C168.971138,132.694639 169.668705,132.380694 170.154571,131.832278 L170.154571,131.832278 L252.930819,38.708999 C253.419531,38.1837537 254.176911,38.0053627 254.848672,38.2572733 C255.520434,38.5091839 255.973764,39.1415911 255.996606,39.8586691 L255.996606,39.8586691 L255.996606,266.343681 C256.028319,266.860939 255.83665,267.366955 255.470206,267.733398 C255.103763,268.099842 254.597747,268.291511 254.080489,268.259798 L254.080489,268.259798 L1.91951123,268.259798 C1.40225345,268.291511 0.896236952,268.099842 0.529793658,267.733398 C0.163350364,267.366955 -0.0283193115,266.860939 0.00339438157,266.343681 L0.00339438157,266.343681 L0.00339438157,1.91955542 C-0.0283193115,1.40229764 0.163350364,0.896281144 0.529793658,0.52983785 C0.896236952,0.163394556 1.40225345,-0.0282751193 1.91951123,0.00343857381 L1.91951123,0.00343857381 Z M169.004901,152.909563 C157.595908,152.708949 146.600443,157.179283 138.568082,165.284007 C130.535722,173.388731 126.164179,184.423846 126.467107,195.830581 C126.467107,222.272993 145.628275,239.134822 170.537794,239.134822 C182.068736,239.421769 193.375993,235.921903 202.728557,229.171014 C203.595534,228.383773 203.758299,227.081655 203.111781,226.105227 L203.111781,226.105227 L196.21376,215.758196 C195.438224,214.868953 194.118537,214.703992 193.147973,215.374973 C187.152367,219.469543 180.095799,221.73297 172.837134,221.88977 C159.424316,221.88977 150.993402,213.458856 149.460509,203.495048 C149.488325,203.083823 149.815731,202.756417 150.226955,202.728601 L150.226955,202.728601 L208.093684,202.728601 C209.327358,202.645153 210.309577,201.662935 210.393025,200.429261 L210.393025,200.429261 L210.393025,198.129921 C210.393025,171.304285 193.531196,152.909563 169.004901,152.909563 Z M111.904618,138.347075 C100.26487,128.832771 85.5368757,123.923439 70.5164945,124.551034 C44.4573053,124.551034 28.3619238,139.879969 28.3619238,158.27469 C28.3619238,200.046038 91.9770032,186.63322 91.9770032,206.177612 C91.9770032,212.309186 85.8454293,218.44076 72.8158347,218.44076 C60.4410031,218.54287 48.5018438,213.876992 39.4754015,205.411165 C38.9365113,204.907341 38.2064628,204.660494 37.4723971,204.733901 C36.7383313,204.807307 36.0716199,205.19383 35.6431678,205.794388 L35.6431678,205.794388 L25.6793602,219.59043 C25.0328421,220.566858 25.1956068,221.868976 26.0625835,222.656217 C36.4096145,232.236801 50.9721026,238.751598 71.2829412,238.751598 C101.174364,238.751598 115.736852,223.422663 116.503299,203.495048 C116.503299,162.106924 52.8882195,173.986849 52.8882195,156.358574 C52.8882195,149.843776 58.63657,145.245096 68.6003776,145.245096 C79.5839899,145.094583 90.2811092,148.750561 98.8750239,155.592127 C99.3802624,156.006036 100.031063,156.198722 100.680205,156.126595 C101.329346,156.054468 101.921977,155.723624 102.324034,155.208903 L102.324034,155.208903 L112.287842,141.796086 C112.701751,141.290847 112.894437,140.640046 112.82231,139.990905 C112.750183,139.341763 112.419339,138.749133 111.904618,138.347075 Z M169.388124,169.771392 C179.811439,169.188344 188.809537,176.998014 189.698963,187.399667 C189.671147,187.810891 189.34374,188.138297 188.932516,188.166113 L188.932516,188.166113 L149.843732,188.166113 C149.432507,188.138297 149.105101,187.810891 149.077285,187.399667 C150.358676,177.20234 159.111948,169.60516 169.388124,169.771392 Z"
                            fill="#2CB134"
                          ></path>
                        </g>
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Selenium
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Selenium is a popular open-source web testing tool but
                          has limitations that slow down testing
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <button
              type="button"
              data-flyout-menu="#resources-menu"
              // data-active-className="text-gray-900"
              // data-inactive-className="text-gray-500"
              className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span>Resources</span>
              <svg
                // data-active-className="text-gray-600"
                // data-inactive-className="text-gray-400"
                className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <div id="resources-menu" className="relative z-10 hidden">
              <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        ></path>
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Help Center
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Get all of your questions answered in our help center,
                          or contact support.
                        </p>
                      </div>
                    </a>

                    <a
                      href="/"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Documentation
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Learn how to get the most out of Codeless testing.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <a
              href="/pricing"
              // data-active-className="text-gray-900"
              rel="noopener"
              // data-inactive-className="text-gray-500"
              className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span>Pricing</span>
            </a>
          </div>

          <div className="relative">
            <a
              href="/blog"
              // data-active-className="text-gray-900"
              rel="noopener"
              // data-inactive-className="text-gray-500"
              className="group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span>Blog</span>
            </a>
          </div>
        </nav>

        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4 ml-8">
          <a
            href="/"
            className="whitespace-nowrap inline-flex items-center justify-center px-4 h-10 text-sm md:text-base font-medium text-primary"
          >
            Login
          </a>
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 bg-primary rounded text-white font-bold sm:flex-1 lg:flex-none lg:px-4 hover:bg-primary-300 flex-shrink-0"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}
