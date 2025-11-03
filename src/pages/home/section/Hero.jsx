import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { HeroCard } from "../../../components";
import heroImage from "../../../assets/something big is coming.jpg";

function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown target: November 7 (local time)
  const targetDate = new Date("2025-11-07T00:00:00").getTime();
  const isCountdownOver = Date.now() >= targetDate;

  // Article carousel state (shown after countdown ends)
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = Math.max(0, targetDate - now);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  // Fetch featured articles for the carousel once
  useEffect(() => {
    if (isCountdownOver) {
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
        .catch((error) => console.error("Error fetching featured articles:", error));
    }
  }, [isCountdownOver, BASE_URL]);

  if (isCountdownOver) {
    return (
      <div className="relative w-full max-w-7xl mx-auto h-auto md:h-[680px] py-8 flex items-center justify-center">
        <div
          ref={sliderRef}
          className="flex"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            width: `${Math.max(1, featuredArticles.length) * 100}%`,
          }}
        >
          {featuredArticles.map((article, i) => (
            <div key={i} className="w-full flex-shrink-0 flex justify-center items-center">
              <HeroCard article={article} />
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
          {featuredArticles.map((_, i) => (
            <button
              key={i}
              className={`block h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-8 bg-gradient-to-r from-red-700 to-green-700" : "w-4 bg-gray-300"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="px-4 pt-6 pb-0">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl p-4 md:p-8 shadow-2xl relative overflow-hidden"
             style={{
               background:
                 "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(220,38,38,0.85) 35%, rgba(22,163,74,0.85) 80%)",
             }}>
          <div className="absolute inset-0 pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div
              className="w-full h-[360px] md:h-[660px] rounded-2xl bg-center bg-no-repeat bg-contain md:bg-cover shadow-lg"
              style={{ backgroundImage: `url(${heroImage})` }}
            />

            <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left py-4 md:py-6 gap-3">
              <p className="text-white/70 text-[11px] md:text-xs uppercase tracking-[0.3em]">Coming Soon</p>
              <p className="text-white/90 text-xs md:text-sm uppercase tracking-wide font-extrabold">ONE DREAM. ONE GAME. ONE NATION</p>

              <div className="mt-6 md:mt-10 grid grid-cols-2 md:grid-cols-none md:grid-flow-col gap-4 md:gap-10 items-end">
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-6xl font-bold text-white tabular-nums">{String(timeLeft.days).padStart(2, "0")}</div>
                  <span className="mt-2 text-white/80 text-sm">Days</span>
                </div>
                <div className="text-white text-4xl md:text-6xl font-bold hidden md:block">:</div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-6xl font-bold text-white tabular-nums">{String(timeLeft.hours).padStart(2, "0")}</div>
                  <span className="mt-2 text-white/80 text-sm">Hours</span>
                </div>
                <div className="text-white text-4xl md:text-6xl font-bold hidden md:block">:</div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-6xl font-bold text-white tabular-nums">{String(timeLeft.minutes).padStart(2, "0")}</div>
                  <span className="mt-2 text-white/80 text-sm">Minutes</span>
                </div>
                <div className="text-white text-4xl md:text-6xl font-bold hidden md:block">:</div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-6xl font-bold text-white tabular-nums">{String(timeLeft.seconds).padStart(2, "0")}</div>
                  <span className="mt-2 text-white/80 text-sm">Seconds</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
