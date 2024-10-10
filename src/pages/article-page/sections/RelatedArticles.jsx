import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../../../components";
import { Link, useParams } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const RelatedArticles = () => {
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current index for scrolling
  const { title_slug } = useParams();
  const [article, setArticle] = useState({});
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/news/${title_slug}/`);
        const articleData = response.data;
        setArticle(articleData);

        const categoryId = articleData.category?.id;

        if (categoryId) {
          const relatedResponse = await axios.get(
            `${BASE_URL}/api/news/category/${categoryId}/`
          );
          const relatedArticlesWithImagePath = relatedResponse.data.articles
            .map((relatedArticle) => ({
              ...relatedArticle,
              image: `${BASE_URL}${relatedArticle.image}`,
            }))
            // Filter out the current article based on title_slug or id
            .filter(
              (relatedArticle) => relatedArticle.title_slug !== title_slug
            );

          setRelatedArticles(relatedArticlesWithImagePath);
        }
      } catch (error) {
        console.error("Error fetching the article:", error);
      }
    };

    fetchArticle();
  }, [BASE_URL, title_slug]);

  // Handle scrolling between related articles
  const handleNext = () => {
    if (currentIndex < relatedArticles.length - 2) {
      setCurrentIndex((prevIndex) => prevIndex + 2);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 2);
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= relatedArticles.length - 2;
  return (
    <div className="flex flex-col items-center justify-center px-5 md:px-20 py-10 gap-5 md:gap-10">
      <div className="flex-center flex-col gap-2">
        <Header title="Related Articles" />
        <h3 className="text-3xl md:text-4xl font-semibold text-center md:text-left">
          You might like
          <span className="text-transparent bg-gradient-to-b from-[#004324] via-[#116937] to-[#2AA74B] bg-clip-text">
            {" "}
            These
          </span>
        </h3>
        <div className="flex flex-row items-center gap-4">
          <div
            onClick={handlePrev}
            className={`p-2 rounded-md cursor-pointer transition-all ease-in duration-500 ${
              isPrevDisabled
                ? "bg-gradient-to-r from-red-700/40 to-green-700/40 cursor-not-allowed"
                : "bg-gradient-to-r from-red-700 to-green-700 text-white"
            }`}
          >
            <MdKeyboardArrowLeft />
          </div>
          <div className=" flex flex-col md:grid md:grid-cols-2 gap-4 py-16">
            {relatedArticles
              .slice(currentIndex, currentIndex + 2)
              .map((relatedArticle) => (
                <Link
                  to={`/news/${relatedArticle.title_slug}`}
                  key={relatedArticle.id}
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ backgroundImage: `url(${relatedArticle.image}) ` }}
                  className="rounded-sm md:rounded-lg bg-cover bg-right-top overflow-hidden hover:scale-105 transition-all duration-300 ease-in"
                >
                  <div className="flex flex-col items-start justify-end gap-2 p-4 shadow-inner min-h-[300px] hover:cursor-pointer transition-all duration-300 ease-in bg-gradient-to-b from-white/25 via-[#09371D]/40 to-[#09371D]/90 hover:bg-gradient-to-b hover:from-white/30 hover:via-[#09371D]/50 hover:to-[#072414] z-10 w-full  md:h-[200px] bg-cover bg-right-top overflow-hidden">
                    <h4 className="text-lg font-semibold self-start text-white">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-sm font-normal line-clamp-2 text-white">
                      {relatedArticle.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
          <div
            onClick={handleNext}
            className={`p-2 rounded-md cursor-pointer transition-all ease-in duration-500 ${
              isNextDisabled
                ? "bg-gradient-to-r from-red-700/40 to-green-700/40 cursor-not-allowed"
                : "bg-gradient-to-r from-red-700 to-green-700 text-white"
            }`}
          >
            <MdKeyboardArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;
