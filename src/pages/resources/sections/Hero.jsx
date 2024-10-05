import { resourcesHero } from "../../../assets";
import { Header } from "../../../components";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-3">
      <div className="border bg-white p-1.5 w-full rounded-3xl md:rounded-[40px]">
        <div className="flex items-center flex-col md:flex-row gap-6 md:gap-12 rounded-2xl md:rounded-[32px] md:h-[584px] overflow-hidden bg-gray-100">
          <div className="w-full md:w-2/3 h-1/2 md:h-full">
            <img
              src={resourcesHero}
              alt="top-story"
              className="size-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-4 items-center md:items-start justify-center p-3 md:pr-4">
            <Header title="Election Files" />

            <h3 className="text-4xl font-semibold text-center md:text-left">
              All you
              <span className="text-transparent bg-gradient-to-b from-[#004324] to-[#116937] bg-clip-text">
                {" "}
                need to know{" "}
              </span>
              about the
              <span className="text-transparent bg-gradient-to-b from-[#004324] via-[#116937] to-[#2AA74B] bg-clip-text">
                {" "}
                electoral process
              </span>
            </h3>

            <p className="mt-4 text-base font-normal text-center md:text-left">
              Documents to get you up to speed on all you need to know about our
              electoral process including regulations, the voter’s register,
              candidates or the final results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
