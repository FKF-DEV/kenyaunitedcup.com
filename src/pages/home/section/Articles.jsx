import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { calendar, clock } from "../../../assets";
import { Header } from "../../../components";

function Articles() {
  const [articles, setArticles] = useState([]);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/news/`);
        const firstTwoArticles = response.data.results
          .slice(0, 2)
          .map((article) => ({
            ...article,
            image: article.image.startsWith("http")
              ? article.image
              : `${BASE_URL}${article.image}`,
          }));
        setArticles(firstTwoArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [BASE_URL]);

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

      <div className="flex items-center w-full flex-row overflow-x-scroll gap-4 p-4 md:gap-8">
        {articles.map((article, index) => (
          <Link
            to={`/news/${article.title_slug}`}
            key={article.id}
            onClick={() => window.scrollTo(0, 0)}
            className={`relative h-72 md:h-[512px] aspect-video p-8 rounded-2xl md:rounded-3xl shadow-lg flex items-end bg-cover bg-center transition-all duration-300 hover:cursor-pointer ${
              index === 1 ? "w-[34%]" : "w-full"
            }`}
            style={{ backgroundImage: `url(${article.image})` }}
          >
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl hover:bg-gradient-to-b hover:from-white/30 hover:via-[#09371D]/50 hover:to-[#09371D] transition-all duration-300 z-10">
              <div
                className={`absolute inset-0 text-white rounded-2xl md:rounded-3xl flex flex-col gap-2 md:gap-5 justify-end px-3 py-4 md:p-8 transition-all duration-300 ${
                  index === 1 ? "overflow-hidden" : "overflow-visible"
                } z-20`}
              >
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold max-w-lg">
                  {article.title}
                </h4>

                <p className="text-sm md:text-base font-normal max-w-lg transition-all duration-300 line-clamp-2">
                  {article.description}
                </p>

                <div className="flex items-center gap-4 md:gap-8 mt-2 md:mt-0">
                  <div className="flex items-center gap-1.5">
                    <img src={clock} alt="clock" className="size-5" />
                    <span className="text-base">
                      {new Date(article.created_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <img src={calendar} alt="calendar" className="size-5" />
                    <span className="text-base">
                      {new Date(article.created_at).toLocaleDateString([], {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center md:-mt-10">
        <div className="flex flex-row items-center gap-4 text-xl font-bold">
          01
          <hr className="w-40 h-1 mx-auto bg-gray-100 border-0 rounded md:my-10 bg-gradient-to-r from-green-700 to-red-700" />
          05
        </div>
        <Link
          to={"/"}
          className="flex items-center gap-2 transition-all duration-300 ease-in hover:gap-2.5 hover:ring ring-[#0F6B38] px-3 py-2 rounded-full"
        >
          <span className="font-sm font-semibold text-[#0F6B38]">
            View More
          </span>
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
    </div>
  );
}

export default Articles;
