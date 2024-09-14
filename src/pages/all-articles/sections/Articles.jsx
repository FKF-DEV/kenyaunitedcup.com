import { FaClock, FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  return (
    <div className="container mx-auto px-4 m-2 md:m-20 max-w-[1440px]">
      {articles.length > 0 && (
        <div className="flex flex-col md:grid gap-20">
          {/* First Div: First 3 Articles */}
          <div className="flex flex-col md:grid grid-cols-4 gap-10 mx-auto">
            {/* Article 1: Large on the left */}
            <Link
              to={`/news/${articles[0].title_slug}`}
              onClick={() => window.scrollTo(0, 0)}
              className="col-span-2 flex flex-col hover:scale-105 transition-all duration-300 ease-in mx-auto"
            >
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="max-w-full h-auto md:h-full object-cover rounded-lg"
              />
              <div className="flex flex-col justify-between mt-16 gap-4 w-full md:w-[75%] mx-auto md:mx-2">
                <h2 className="text-2xl font-bold text-center md:text-left">
                  {articles[0].title}
                </h2>
                <p className="text-base line-clamp-3 md:line-clamp-2">
                  {articles[0].description}
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-1.5">
                    <FaClock className="opacity-80" />
                    <span className="text-base">
                      {new Date(articles[0].created_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaCalendar className="opacity-80" />
                    <span className="text-base">
                      {new Date(articles[0].created_at).toLocaleDateString([], {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Articles 2 and 3: Side by side on the right */}
            <div className="flex flex-col gap-10">
              {articles.slice(1, 3).map((article, index) => (
                <Link
                  to={`/news/${article.title_slug}`}
                  onClick={() => window.scrollTo(0, 0)}
                  key={article.id}
                  className="flex flex-col md:flex-row gap-4 hover:scale-105 transition-all duration-300 ease-in mx-auto"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="max-w-full md:w-full h-auto md:h-[370px] object-cover rounded-lg"
                  />
                  <div className="flex flex-col gap-4 w-full md:min-w-[300px]">
                    <h3 className="text-xl font-bold text-center md:text-left">
                      {article.title}
                    </h3>
                    <p className="text-base line-clamp-3">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <FaClock className="opacity-80" />
                        <span className="text-base">
                          {new Date(articles[0].created_at).toLocaleTimeString(
                            [],
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaCalendar className="opacity-80" />
                        <span className="text-base">
                          {new Date(articles[0].created_at).toLocaleDateString(
                            [],
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Second Div: Articles 4 and 5 */}
          <div className="flex flex-col md:flex-row gap-24 mx-auto">
            {articles.slice(3, 5).map((article) => (
              <Link
                to={`/news/${article.title_slug}`}
                onClick={() => window.scrollTo(0, 0)}
                key={article.id}
                className="flex flex-col md:flex-row gap-4 hover:scale-105 transition-all duration-300 ease-in mx-auto"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="max-w-full md:w-[50%] h-auto md:h-[370px] object-cover rounded-lg"
                />
                <div className="flex flex-col gap-4 max-w-full md:max-w-[300px]">
                  <h3 className="text-xl font-bold text-center md:text-left">
                    {article.title}
                  </h3>
                  <p className="text-base line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1.5">
                      <FaClock className="opacity-80" />
                      <span className="text-base">
                        {new Date(article.created_at).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FaCalendar className="opacity-80" />
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
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Articles;
