export default function Section5() {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            One solution to all of your pain points
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            What's your biggest pain point?
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 sm:pb-16">
        <div className="relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <img src="/assets/section5/section5.png" />
              {/* <dl className="grid grid-cols-3 gap-x-2.5">
                <button
                  data-target-section-id="momentum"
                  className="flex flex-col items-center rounded-lg bg-white shadow-lg p-2 py-6 text-center group border-2 border-indigo-600 indigo-shadow"
                >
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fad"
                      data-icon="tachometer-alt-slow"
                      className="h-10 mx-auto"
                      role="img"
                      viewBox="0 0 576 512"
                    >
                      <g className="fa-group">
                        <path
                          className="fa-secondary"
                          fill="currentColor"
                          d="M288 32C128.94 32 0 160.94 0 320a286.5 286.5 0 0 0 39.06 144.8c5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2A286.5 286.5 0 0 0 576 320c0-159.06-128.94-288-288-288zm0 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32zM96 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm247.12 32H232.88a62.26 62.26 0 0 1 .47-64.86L124.8 206.41a24 24 0 0 1 38.41-28.81l108.56 144.74A63.5 63.5 0 0 1 343.12 416zM400 192a32 32 0 1 1 32 32 32 32 0 0 1-32-32zm80 192a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                          opacity="0.4"
                        ></path>
                        <path
                          className="fa-primary"
                          fill="currentColor"
                          d="M343.12 416H232.88a62.26 62.26 0 0 1 .47-64.86L124.8 206.41a24 24 0 0 1 38.41-28.81l108.56 144.74A63.5 63.5 0 0 1 343.12 416z"
                        ></path>
                      </g>
                    </svg>
                  </dd>
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium t e x - g r a y 4 0">
                    Momentum
                  </dt>
                </button>
                <button
                  data-target-section-id="coverage"
                  className="flex flex-col items-center rounded-lg bg-white shadow-lg p-2 py-6 text-center group border-2 border-transparent"
                >
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fad"
                      data-icon="tasks-alt"
                      className="h-10 mx-auto"
                      role="img"
                      viewBox="0 0 512 512"
                    >
                      <g className="fa-group">
                        <path
                          className="fa-secondary"
                          fill="currentColor"
                          d="M488.12 352H23.94A23.94 23.94 0 0 0 0 375.88V456a23.94 23.94 0 0 0 23.88 24h464.18A23.94 23.94 0 0 0 512 456.12V376a23.94 23.94 0 0 0-23.88-24zM464 432H48v-32h416zm24.12-240H23.94A23.94 23.94 0 0 0 0 215.88V296a23.94 23.94 0 0 0 23.88 24h464.18A23.94 23.94 0 0 0 512 296.12V216a23.94 23.94 0 0 0-23.88-24zM464 272H48v-32h416zm24.12-240H23.94A23.94 23.94 0 0 0 0 55.88V136a23.94 23.94 0 0 0 23.88 24h464.18A23.94 23.94 0 0 0 512 136.12V56a23.94 23.94 0 0 0-23.88-24zM464 112H48V80h416z"
                          opacity="0.4"
                        ></path>
                        <path
                          className="fa-primary"
                          fill="currentColor"
                          d="M48 80v32h304V80zm112 160H48v32h112zM48 432h240v-32H48z"
                        ></path>
                      </g>
                    </svg>
                  </dd>
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-400 group-hover:text-gray-700">
                    Coverage
                  </dt>
                </button>
                <button
                  data-target-section-id="stability"
                  className="flex flex-col items-center rounded-lg bg-white shadow-lg p-2 py-6 text-center group border-2 border-transparent"
                >
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fad"
                      data-icon="fragile"
                      className="h-10 mx-auto"
                      role="img"
                      viewBox="0 0 288 512"
                    >
                      <g className="fa-group">
                        <path
                          className="fa-secondary"
                          fill="currentColor"
                          d="M192.21 0l30.6 63.7-85.5 56 49.4 104.3-121.5-119.7 85.5-56L117.91 0z"
                          opacity="0.4"
                        ></path>
                        <path
                          className="fa-primary"
                          fill="currentColor"
                          d="M160 350.3V480h53.9c24.5 0 33.1 32 20 32H54.11c-13.2 0-4.5-32 20-32H128V350.3C51.31 341.6-6.59 272.7.61 192.7l16-178.1A15.79 15.79 0 0 1 32.31 0h85.6l32.8 48.3-85.5 56L186.71 224l-49.4-104.3 85.5-56L192.21 0h63.5a15.79 15.79 0 0 1 15.7 14.6l16 178.1c7.2 80-50.7 148.8-127.41 157.6z"
                        ></path>
                      </g>
                    </svg>
                  </dd>
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-400 group-hover:text-gray-700">
                    Stability
                  </dt>
                </button>
              </dl> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
