import axios from "axios";
import { useState, useEffect } from "react";
import { FaClock, FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/news/`);
        const articlesWithImagePath = response.data.results.map((article) => ({
          ...article,
          image: article.image.startsWith("http")
            ? article.image
            : `${BASE_URL}${article.image}`,
        }));
        setArticles(articlesWithImagePath);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [BASE_URL]);

  return (
    <div className="container m-20 max-w-[1440px]">
      {articles.length > 0 && (
        <div className="grid gap-20">
          {/* First Div: First 3 Articles */}
          <div className="grid grid-cols-4 gap-24">
            {/* Article 1: Large on the left */}
            <Link
              to={`/news/${articles[0].title_slug}`}
              onClick={() => window.scrollTo(0, 0)}
              className="col-span-2 flex flex-col hover:scale-105 transition-all duration-300 ease-in"
            >
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="flex flex-col justify-between mt-16 gap-4 w-[75%]">
                <h2 className="text-2xl font-bold">{articles[0].title}</h2>
                <p className="text-base line-clamp-2">
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
                  className="flex flex-row gap-4  hover:scale-105 transition-all duration-300 ease-in"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[370px] object-cover rounded-lg"
                  />
                  <div className="flex flex-col gap-4 min-w-[300px]">
                    <h3 className="text-xl font-bold">{article.title}</h3>
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
          <div className="flex flex-row">
            {articles.slice(3, 5).map((article) => (
              <Link
                to={`/news/${article.title_slug}`}
                onClick={() => window.scrollTo(0, 0)}
                key={article.id}
                className="flex flex-row gap-4  hover:scale-105 transition-all duration-300 ease-in"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-[43%] h-[370px] object-cover rounded-lg"
                />
                <div className="flex flex-col gap-4 max-w-[300px]">
                  <h3 className="text-xl font-bold">{article.title}</h3>
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
