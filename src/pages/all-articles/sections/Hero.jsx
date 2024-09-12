import { useState, useEffect } from "react";
import axios from "axios";
import { calendar, clock } from "../../../assets";

const Hero = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current article index
  const BASE_URL = import.meta.env.VITE_API_URL;
  const autoPlayInterval = 3000; // Autoplay interval in milliseconds (5 seconds)

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/news/`)
      .then((response) => {
        const articlesWithImagePath = response.data.featured_articles.map(
          (article) => ({
            ...article,
            image: `${BASE_URL}${article.image}`,
          })
        );
        setFeaturedArticles(articlesWithImagePath);
      })
      .catch((error) =>
        console.error("Error fetching featured articles:", error)
      );
  }, [BASE_URL]);

  // Autoplay functionality: Automatically switch to the next article after the interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === featuredArticles.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [featuredArticles, currentIndex]);

  // Handle selecting an article using pagination dots
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (featuredArticles.length === 0) {
    return <p>Loading featured articles...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        {/* Display the current featured article */}
        <div
          key={featuredArticles[currentIndex].id}
          style={{
            backgroundImage: `url(${featuredArticles[currentIndex].image})`,
          }}
        className="bg-cover bg-right-top overflow-hidden"
        >
          <div className="flex flex-col items-start justify-end gap-4 p-20 shadow-inner min-h-[300px] bg-gradient-to-b from-white/30 via-[#09371D]/50 to-[#09371D] z-10 w-full md:h-[700px] line-clamp-2">
            <h3 className="text-white text-2xl font-semibold">
              {featuredArticles[currentIndex].title}
            </h3>
            <p className="text-white">
              {featuredArticles[currentIndex].description}
            </p>
            <div className="flex items-center gap-4 md:gap-8 mt-2 md:mt-0">
              <div className="flex items-center gap-1.5">
                <img src={clock} alt="clock" className="size-5" />
                <span className="text-base text-white">
                  {new Date(
                    featuredArticles[currentIndex].created_at
                  ).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <img src={calendar} alt="calendar" className="size-5" />
                <span className="text-base text-white">
                  {new Date(
                    featuredArticles[currentIndex].created_at
                  ).toLocaleDateString([], {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex gap-2 pt-12">
        {featuredArticles.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full cursor-pointer ${
              currentIndex === index
                ? "w-8 bg-gradient-to-r from-red-700 to-green-700"
                : "w-4 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
