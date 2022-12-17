export default function Section3() {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our waiting list
          </h2>
        </div>
      </div>
      <div className="bg-white mx-12 !py-10 sm:pb-16">
        <div className="relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="grid grid-cols-3 gap-x-2.5">
                <div className="justify-self-center">
                  <img
                    className="h-12 w-auto"
                    src="/assets/section3/ampo.png"
                  />
                </div>
                <div className="justify-self-center">
                  <img
                    className="h-12 w-auto "
                    src="/assets/section3/cohart.png"
                  />
                </div>
                <div className="justify-self-center">
                  <img
                    className="h-12 w-auto "
                    src="/assets/section3/eton_house.png"
                  />
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
