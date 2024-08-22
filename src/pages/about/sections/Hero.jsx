import { topStory } from "../../../assets";
import { Header } from "../../../components";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-3">
      <div className="border bg-white p-1.5 w-full rounded-3xl md:rounded-[40px]">
        <div className="flex items-center flex-col md:flex-row gap-6 md:gap-12 rounded-2xl md:rounded-[32px] md:h-[584px] overflow-hidden bg-gray-100">
          <div className="w-full md:w-1/2 h-1/2 md:h-full">
            <img
              src={topStory}
              alt="top-story"
              className="size-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-4 items-center md:items-start justify-center p-3 md:pr-4">
            <Header title="About the Board" />

            <h3 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
              An organization built on
              <span className="text-transparent bg-gradient-to-b from-[#004324] via-[#116937] to-[#2AA74B] bg-clip-text">
                {" "}
                openness{" "}
              </span>
              and
              <span className="text-transparent bg-gradient-to-b from-[#004324] via-[#116937] to-[#2AA74B] bg-clip-text">
                {" "}
                transparency{" "}
              </span>
            </h3>

            <p className="mt-4 text-sm font-normal text-center md:text-left">
              The FKF Electoral Board was constituted by the FKF National
              Executive Committee, as provided for in Article 39 Clause 1p of
              the FKF Constitution. It will be in place for four years effective
              January 28, 2020, following its ratification and adoption at the
              January 2020 Special General Meeting. The Board will oversee
              National and County Elections, and may appoint an individual or
              institution to oversee sub-county elections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
