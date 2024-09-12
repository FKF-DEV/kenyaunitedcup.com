import axios from "axios";
import { useState, useEffect } from "react";
import { calendar, clock } from "../../../assets";
import { FaClock, FaCalendar } from "react-icons/fa";

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
    <div>
      {articles.length === 0 ? (
        <p>No articles available.</p>
      ) : (
        <div>
          {articles.map((article) => (
            <div key={article.id}>
              <img src={article.image} alt={article.title} />
              <p>{article.title}</p>
              <p>{article.description}</p>
              <div className="flex items-center gap-4 md:gap-8 mt-2 md:mt-0">
                <div className="flex items-center gap-1.5">
                  <FaClock alt="clock" className="opacity-80" />
                  <span className="text-base">
                    {new Date(article.created_at).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaCalendar alt="calendar" className="opacity-80"/>
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
          ))}
        </div>
      )}
    </div>
  );
};

export default Articles;
