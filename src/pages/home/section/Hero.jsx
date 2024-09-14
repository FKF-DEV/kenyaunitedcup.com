import { HeroCard } from "../../../components";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

function Hero() {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const BASE_URL = import.meta.env.VITE_API_URL;
  const sliderRef = useRef(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === featuredArticles.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [featuredArticles.length]);

  return (
    <div className="relative w-full max-w-7xl mx-auto h-auto md:h-[680px] py-8 flex items-center justify-center">
      <div
        ref={sliderRef}
        className="flex"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          width: `${featuredArticles.length * 100}%`,
        }}
      >
        {featuredArticles.map((article, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 flex justify-center items-center" // Centering the HeroCard
          >
            <HeroCard article={article} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
        {featuredArticles.map((_, i) => (
          <button
            key={i}
            className={`block h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === i
                ? "w-8 bg-gradient-to-r from-red-700 to-green-700"
                : "w-4 bg-gray-300"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
