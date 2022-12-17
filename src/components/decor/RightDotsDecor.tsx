export default function RightDotsDecor() {
  return (
    <div className="absolute right-1 top-12 w-[30px] lg:w-[210px] h-[400px]">
      <svg
        className="hidden lg:block"
        viewBox="0 0 210 540"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(https://preflight.com/#circle-pattern)"
        ></rect>
      </svg>
      <svg
        className="lg:hidden"
        viewBox="0 0 30 540"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(https://preflight.com/#circle-pattern)"
        ></rect>
      </svg>
    </div>
  );
}
