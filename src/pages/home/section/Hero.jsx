import { Carousel } from "@material-tailwind/react";
import { HeroCard } from "../../../components";
import axios from "axios";
import { useState, useEffect } from "react";

function Hero() {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchFeaturedArticles = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/news/`);
        const articlesWithImagePath = response.data.featured_articles.map(
          (article) => ({
            ...article,
            image: `${BASE_URL}${article.image}`,
          })
        );
        setFeaturedArticles(articlesWithImagePath);
      } catch (error) {
        console.error("Error fetching featured articles:", error);
      }
    };

    fetchFeaturedArticles();
  }, []);

  return (
    <Carousel
      className="relative w-full max-w-7xl mx-auto overflow-hidden h-96 md:h-[680px] py-8"
      prevArrow={() => {}}
      nextArrow={() => {}}
      autoplay
      autoplayDelay={5000}
      transition={{
        type: "tween",
        duration: 1,
      }}
      loop
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
          {Array.from({ length }).map((_, i) => (
            <span
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
      )}
    >
      {featuredArticles.map((article, i) => (
        <HeroCard key={i} article={article} />
      ))}
    </Carousel>
  );
}

export default Hero;
