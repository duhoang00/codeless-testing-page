import RightDotsDecor from "./decor/RightDotsDecor";

export default function Section4() {
  return (
    <div className="relative bg-gray-50 pt-12 sm:pt-16 ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
            Our interviews
          </h2>

          <dl className="grid grid-cols-2 gap-x-2.5">
            <div className="justify-self-center">
              <img src="/assets/section4/Thoa.png" />
            </div>
            <div className="justify-self-center">
              <img src="/assets/section4/Quy.png" />
            </div>
          </dl>

          <dl className="grid grid-cols-2 gap-x-2.5 mt-1">
            <div className="justify-self-center">
              <img src="/assets/section4/Huyen.png" />
            </div>
            <div className="justify-self-center">
              <img src="/assets/section4/Vinh.png" />
            </div>
          </dl>

          <dl className="grid grid-cols-2 gap-x-2.5 mt-1">
            <div className="justify-self-center">
              <img src="/assets/section4/Loan.png" />
            </div>
            <div className="justify-self-center">
              <img src="/assets/section4/Anh.png" />
            </div>
          </dl>
        </div>
      </div>

      <RightDotsDecor />
    </div>
  );
}
