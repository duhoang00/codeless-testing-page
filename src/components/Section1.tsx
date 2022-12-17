export default function Section1() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 pt-4 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[580px_1fr] gap-4 lg:gap-6">
          <div className="flex flex-col items-start">
            <h1 className="text-[length:32px] lg:text-5xl text-center lg:text-left leading-none font-medium text-gray-900">
              <span className="text-primary font-bold">Write less</span> Test
              more
            </h1>

            <div>
              <p className="text-lg mt-4">
                <b>Write</b> your tests by <b>drag&drop</b> blocks.
              </p>
              <p className="text-lg !text-grey-600 mb-4">
                <b>Run</b> your tests in <b>real browsers</b>.
              </p>
            </div>

            <div className="mt-2">
              <img src="/assets/section1/demo.gif" />
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start mt-4 lg:mt-10 w-full space-y-2 md:space-y-0 md:space-x-6">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 bg-primary rounded text-white font-bold sm:flex-1 lg:flex-none lg:px-11 hover:bg-primary-300 flex-shrink-0"
              >
                Get Started
              </a>

              {/* <button
                data-role="video-player-toggle"
                className="inline-flex items-center justify-center h-12 rounded sm:flex-1 lg:flex-none lg:px-11 hover:bg-black/5 text-grey-600 space-x-1.5 flex-shrink-0"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
                    fill="#718096"
                  ></path>
                  <path
                    d="M9.09961 11.9995V10.5195C9.09961 8.6095 10.4496 7.8395 12.0996 8.7895L13.3796 9.5295L14.6596 10.2695C16.3096 11.2195 16.3096 12.7795 14.6596 13.7295L13.3796 14.4695L12.0996 15.2095C10.4496 16.1595 9.09961 15.3795 9.09961 13.4795V11.9995Z"
                    fill="#718096"
                  ></path>
                </svg> 
                <span id="video-player-visible-text" className="">
                  Watch Video
                </span>
                <span id="video-player-hidden-text" className="hidden">
                  Hide video
                </span>
              </button>*/}
            </div>
          </div>
          <div className="flex items-center justify-center order-first lg:order-none aspect-w-16 aspect-h-9">
            {/* <video data-lazy-video="" preload="none" poster="/assets/images/landing_video_poster.webp" loop="" muted="" className="mx-auto">
				<source src="/assets/videos/landing.mp4" type="video/mp4">
			</video> */}
            <img src="/assets/section1/Section1.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
