export default function Section2() {
  return (
    <div className="bg-gray-50 pt-1 md:pt-8">
      <div className="max-w-7xl mx-auto px-[34px] sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3 text-center">
          Based on a self-research
        </h2>
        <div className="flex items-center justify-center space-x-3.5 sm:space-x-10 relative z-[1] w-full">
          <div
            className="flex items-center relative w-full sm:w-auto"
            id="stats-users"
          >
            <div
              className="absolute
             left-0 -translate-x-1/2 
      top-0 flex items-center z-10 h-full"
            >
              <div
                className="relative bg-white flex flex-shrink-0 items-center justify-center w-9 sm:w-[54px] h-9 sm:h-[54px] rounded-full border-2 border-transparent bg-clip-padding
                  before:absolute before:inset-0 before:-z-[1] before:-m-0.5 before:rounded-[inherit] before:bg-home-circle-gradient"
              >
                <img
                  src="/assets/section2/section2_1.svg"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  width="32"
                  height="32"
                />
              </div>
            </div>

            <div
              className="flex flex-col items-center justify-center h-[72px] sm:h-[100px] w-full sm:w-[200px] bg-white relative border-2 border-transparent bg-clip-padding
           rounded-tl-3xl rounded-tr rounded-br-3xl rounded-bl 
              before:absolute before:inset-0 before:-z-[1] before:-m-0.5 before:rounded-[inherit] before:bg-home-circle-gradient"
            >
              {/* <span className="value text-2xl sm:text-[30px] font-medium text-black leading-tight tabular-nums h-[38px] empty:before:w-28 empty:before:h-6 empty:before:rounded-md empty:before:bg-gray-100 empty:before:animate-pulse empty:before:block">
                5,718
              </span> */}
              <div className="">
                {/* <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> */}
                <div className="text-sm sm:text-lg font-medium text-grey-600 leading-tight">
                  2 Automation QA
                </div>
                <div className="text-sm sm:text-lg font-medium text-grey-600 leading-tight">
                  4 Manual QA
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex items-center relative w-full sm:w-auto"
            id="stats-tests"
          >
            <div
              className="absolute
             right-0 translate-x-1/2 
      top-0 flex items-center z-10 h-full"
            >
              <div
                className="relative bg-white flex flex-shrink-0 items-center justify-center w-9 sm:w-[54px] h-9 sm:h-[54px] rounded-full border-2 border-transparent bg-clip-padding
                  before:absolute before:inset-0 before:-z-[1] before:-m-0.5 before:rounded-[inherit] before:bg-home-circle-gradient"
              >
                <img
                  src="/assets/section2/section2.svg"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  width="32"
                  height="32"
                />
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center h-[72px] sm:h-[100px] w-full sm:w-[200px] bg-white relative border-2 border-transparent bg-clip-padding
           rounded-tr-3xl rounded-tl rounded-bl-3xl rounded-br 
              before:absolute before:inset-0 before:-z-[1] before:-m-0.5 before:rounded-[inherit] before:bg-home-circle-gradient"
            >
              {/* <span className="value text-2xl sm:text-[30px] font-medium text-black leading-tight tabular-nums h-[38px] empty:before:w-28 empty:before:h-6 empty:before:rounded-md empty:before:bg-gray-100 empty:before:animate-pulse empty:before:block">
                1,406,339
              </span> */}
              <div className="flex items-center space-x-2">
                {/* <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> */}
                <span className="text-sm sm:text-lg font-medium text-grey-600 leading-tight">
                  5 Projects
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          {/* <picture>
        <source srcset="/assets/images/y-combinator-logo.webp" type="image/webp" width="214" height="24" alt="Y Combinator Logo">
        <img srcset="/assets/images/y-combinator-logo.png" alt="Y Combinator Logo" width="214" height="24">
      </picture> */}
        </div>
      </div>
    </div>
  );
}
