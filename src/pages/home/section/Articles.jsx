import { Link } from "react-router-dom";
import { calendar, clock, topStory } from "../../../assets";
import { Header } from "../../../components";

// Static data
const articles = [
  {
    id: 1,
    image: topStory,
    title:
      "FKF Electoral Board publishes final results from national elections",
    description:
      "Football Kenya Federation’s Electoral Board has published the final results from the national elections held on October 17, 2020.",
    time: "12:20 PM",
    date: "Sep 1, 2023",
  },
  {
    id: 2,
    image: topStory,
    title: "New regulations introduced in Kenyan football",
    description:
      "The Kenyan football federation has announced new regulations that will impact upcoming matches and player transfers.",
    time: "10:15 AM",
    date: "Sep 5, 2023",
  },
  // Add more articles if needed
];

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
        {articles.map((article, index) => (
          <div
            key={article.id}
            className={`relative h-72 md:h-[512px] aspect-video p-8 rounded-2xl md:rounded-3xl flex items-end bg-gradient-to-b from-white via-[#09371D]/50 to-[#116937] ${
              index === 1 ? "w-[34%]" : "w-full"
            }`}
            style={{ backgroundImage: `url(${article.image})` }}
          >
            <div
              className={`absolute inset-0 rounded-2xl md:rounded-3xl flex flex-col gap-2 justify-end px-3 py-4 md:p-8 transition-all duration-300 ${
                index === 1 ? "overflow-hidden" : "overflow-visible"
              }`}
            >
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold max-w-lg">
                {article.title}
              </h4>

              <p
                className={`text-sm md:text-base font-normal max-w-lg transition-all duration-300 ${
                  index === 1 ? "line-clamp-3 md:line-clamp-none" : ""
                }`}
              >
                {article.description}
              </p>

              <div className="flex items-center gap-4 md:gap-8 mt-2 md:mt-0">
                <div className="flex items-center gap-1.5">
                  <img src={clock} alt="clock" className="size-5" />
                  <span className="text-base">{article.time}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <img src={calendar} alt="calendar" className="size-5" />
                  <span className="text-base">{article.date}</span>
                </div>
              </div>
            </div>
          </div>
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
