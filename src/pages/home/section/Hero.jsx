import { HeroCard } from "../../../components";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

function Hero() {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1); // Start at 1 for seamless loop
  const BASE_URL = import.meta.env.VITE_API_URL;
  const sliderRef = useRef(null);
  const transitionDuration = 3000;

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
        // Add first and last clones
        setFeaturedArticles([
          articlesWithImagePath[articlesWithImagePath.length - 1],
          ...articlesWithImagePath,
          articlesWithImagePath[0],
        ]);
      })
      .catch((error) =>
        console.error("Error fetching featured articles:", error)
      );
  }, [BASE_URL]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === featuredArticles.length - 1 ? 1 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [featuredArticles.length]);

  // Handle seamless transition
  useEffect(() => {
    if (activeIndex === 0) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setActiveIndex(featuredArticles.length - 2);
      }, transitionDuration);
    }
    if (activeIndex === featuredArticles.length - 1) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setActiveIndex(1);
      }, transitionDuration);
    }
  }, [activeIndex, featuredArticles.length]);

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden h-96 md:h-[680px] py-8">
      <div
        ref={sliderRef}
        className="flex"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          width: `${featuredArticles.length * 100}%`,
        }}
      >
        {featuredArticles.map((article, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <HeroCard article={article} />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
        {featuredArticles.slice(1, -1).map((_, i) => (
          <button
            key={i}
            className={`block h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === i + 1
                ? "w-8 bg-gradient-to-r from-red-700 to-green-700"
                : "w-4 bg-gray-300"
            }`}
            onClick={() => setActiveIndex(i + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
