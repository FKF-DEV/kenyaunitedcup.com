import { Link } from "react-router-dom";
import Header from "./Header";

const HeroCard = ({ article }) => {
  return (
    <div className="border bg-white p-1.5 w-[375px] sm:w-[768px] md:w-[1280px] rounded-3xl md:rounded-[40px]">
      <div className="relative flex items-center flex-col md:flex-row gap-6 md:gap-12 rounded-2xl md:rounded-[32px] md:h-[584px] overflow-hidden bg-gray-100">
        {/* subtle football overlay */}
        <svg
          className="absolute -right-20 -bottom-20 md:right-8 md:bottom-8 w-[380px] h-[380px] opacity-10 pointer-events-none"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="95" stroke="#ffffff" strokeWidth="2" />
          {/* pentagon */}
          <path d="M100 55 L128 72 L118 103 L82 103 L72 72 Z" fill="#ffffff" fillOpacity="0.06" stroke="#ffffff" strokeWidth="1.5" />
          {/* seams */}
          <path d="M100 55 L100 5" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" />
          <path d="M128 72 L170 50" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" />
          <path d="M118 103 L150 145" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" />
          <path d="M82 103 L50 145" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" />
          <path d="M72 72 L30 50" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="1" />
        </svg>
        <div className="w-full h-auto md:w-1/2 md:h-full">
          <img
            src={article.image}
            alt={article.title}
            className="h-80 md:size-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-4 items-center md:items-start justify-center p-3 md:pr-4">
          <Header title="Featured News" color="primary" />

          <h3 className="text-2xl md:text-4xl font-semibold text-center md:text-left text-transparent bg-gradient-to-b from-[#004324] to-[#116937] bg-clip-text">
            {article.title}
          </h3>

          <p className="mt-4 text-sm font-normal text-center md:text-left line-clamp-4">
            {article.description}
          </p>

          <Link
            to={`/news/${article.title_slug}`}
            className="flex items-center gap-2 transition-all duration-300 ease-in hover:gap-2.5 hover:ring ring-[#0F6B38] px-3 py-2 rounded-full"
          >
            <span className="font-sm font-semibold text-[#0F6B38]">
              Read More
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
    </div>
  );
};

export default HeroCard;
