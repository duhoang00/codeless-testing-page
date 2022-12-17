export default function Section9() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">
          Our Integrations
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              loading="lazy"
              className="h-12 w-auto"
              src="/assets/section9/microsoft.png"
              alt="microsoft"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              loading="lazy"
              className="h-12 w-auto"
              src="/assets/section9/typescript.png"
              alt="typescript"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              loading="lazy"
              className="h-12 w-auto"
              src="/assets/section9/reactflow.png"
              alt="reactflow"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              loading="lazy"
              className="h-12 w-auto"
              src="/assets/section9/figma.png"
              alt="figma"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              loading="lazy"
              className="h-12 w-auto"
              src="/assets/section9/vscode.png"
              alt="vscode"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
