import Link from "next/link";

function RoadmapPage() {
  return (
    <article className="bg-gray-100">
      <div className="mx-auto max-w-2xl px-2 sm:px-4">
        <div className="sticky top-0 flex justify-end px-8 py-12 sm:justify-center sm:px-8">
          <Link href="/">
            <div className="rounded-full bg-white p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.644"
                height="11.385"
                viewBox="0 0 11.644 11.385"
              >
                <g
                  id="Group_40"
                  dataname="Group 40"
                  transform="translate(-954.372 -59.349)"
                >
                  <g
                    id="Group_39"
                    dataname="Group 39"
                    transform="translate(-6035.801 -1683.588)"
                  >
                    <line
                      id="Line_6"
                      dataname="Line 6"
                      y2={12.101}
                      transform="translate(7000.403 1744.351) rotate(45)"
                      fill="none"
                      stroke="#0D1117"
                      stroke-linecap="round"
                      strokeWidth={2}
                    ></line>
                    <line
                      id="Line_7"
                      dataname="Line 7"
                      y2={12.101}
                      transform="translate(7000.144 1752.908) rotate(135)"
                      fill="none"
                      stroke="#0D1117"
                      strokeLinecap="round"
                      strokeWidth={2}
                    ></line>
                  </g>
                </g>
              </svg>
            </div>
          </Link>
        </div>
        <div className="p-8 tracking-wider text-gray-500">
          <h1 className="font-serif text-5xl font-bold tracking-tighter text-gray-800">
            Skillset Roadmap.
          </h1>
          <div className="my-10 w-fit rounded-full bg-white px-4 py-2 text-xs font-bold tracking-tight">
            Feb 1, 2024
          </div>
          <p className="py-4">
            Throughout all these years i think i have made web development my
            strongest skill
          </p>
        </div>
      </div>
    </article>
  );
}

export default RoadmapPage;
