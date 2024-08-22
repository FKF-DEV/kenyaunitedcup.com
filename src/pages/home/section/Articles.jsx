import { Link } from "react-router-dom";
import { calendar, clock, topStory } from "../../../assets";
import { Header } from "../../../components";

function Articles() {
  return (
    <div className="px-4 py-6 flex flex-col items-center gap-10 max-w-[1440px] mx-auto">
      <div className="flex-center flex-col gap-2">
        <Header title="News" />
        <h3 className="text-4xl font-semibold text-center md:text-left">
          What&apos;s
          <span className="text-transparent bg-gradient-to-b from-[#004324] via-[#116937] to-[#2AA74B] bg-clip-text">
            {" "}
            up
          </span>
        </h3>

        <p className="mt-4 text-base font-normal text-center max-w-lg">
          From grassroot initiatives to strategic decisions, we have had a
          profound ripple effect on the nation’s football footprint
        </p>
      </div>

      <div className="flex items-center w-full flex-row overflow-x-scroll gap-4 md:gap-8">
        {Array.from({ length: 10 }).map((item, i) => (
          <NewsCard key={i} />
        ))}
      </div>

      <Link
        to={"/"}
        className="flex items-center gap-2 transition-all duration-300 ease-in hover:gap-2.5 hover:ring ring-[#0F6B38] px-3 py-2 rounded-full"
      >
        <span className="font-sm font-semibold text-[#0F6B38]">View More</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8889 6.88892L17 10M17 10L13.8889 13.1111M17 10L3 10"
            stroke="#0F6B38"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Articles;

const NewsCard = () => {
  return (
    <div className="relative w-full sm:w-4/5 h-72 md:h-[512px] aspect-video p-8 rounded-2xl md:rounded-3xl flex items-end bg-gradient-to-b from-white via-[#09371D]/50 to-[#116937]">
      <div
        className="absolute inset-0 bg-center bg-cover rounded-2xl md:rounded-3xl"
        style={{ backgroundImage: `url(${topStory})` }}
      />

      <div className="rounded-2xl md:rounded-3xl text-white absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#116937] transition-opacity duration-300 flex flex-col gap-2 justify-end px-3 py-4 md:p-8">
        <h4 className=" text-lg sm:text-xl md:text-2xl font-semibold max-w-lg">
          FKF Electoral Board publishes final results from national elections
        </h4>

        <p className="text-sm md:text-base font-normal max-w-lg line-clamp-3 md:line-clamp-none">
          Football Kenya Federation’s Electoral Board has published the final
          results from the national elections held on October 17, 2020
        </p>

        <div className="flex items-center gap-4 md:gap-8 mt-2 md:mt-0">
          <div className="flex items-center gap-1.5">
            <img src={clock} alt="clock" className="size-5" />
            <span className="text-base">12:20 PM</span>
          </div>

          <div className="flex items-center gap-1.5">
            <img src={calendar} alt="calendar" className="size-5" />
            <span className="text-base">Sep 1, 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};
