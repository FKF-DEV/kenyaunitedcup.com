import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Border, Header } from "../../components";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiThumbsUp } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ArticlePage = () => {
  const { title_slug } = useParams();
  const [article, setArticle] = useState({});
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [liked, setLiked] = useState(false); // State to track if the article is liked
  const [likes, setLikes] = useState(0); // State to track the number of likes
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/news/${title_slug}/`);
        const articleData = response.data;
        setArticle(articleData);
        setLikes(articleData.likes); // Set the initial likes count

        const categoryId = articleData.category?.id;

        if (categoryId) {
          const relatedResponse = await axios.get(
            `${BASE_URL}/api/news/category/${categoryId}/`
          );
          const relatedArticlesWithImagePath =
            relatedResponse.data.articles.map((relatedArticle) => ({
              ...relatedArticle,
              image: `${BASE_URL}${relatedArticle.image}`,
            }));
          setRelatedArticles(relatedArticlesWithImagePath);
        }
      } catch (error) {
        console.error("Error fetching the article:", error);
      }
    };

    fetchArticle();
  }, [BASE_URL, title_slug]);

  // Handle like button click
  const handleLikeClick = async () => {
    if (!liked) {
      try {
        const response = await axios.post(
          `${BASE_URL}/api/news/${article.id}/like/`
        );
        if (response.status === 200) {
          setLiked(true); // Set liked state to true
          setLikes((prevLikes) => prevLikes + 1); // Increment likes
        }
      } catch (error) {
        console.error("Error liking the article:", error);
      }
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center py-10">
      <div className="flex flex-col items-center justify-center px-40 py-10 gap-10">
        <h3 className="text-xl md:text-3xl font-bold text-transparent bg-gradient-to-b from-[#004324] to-[#116937]/70 bg-clip-text">
          {article.title}
        </h3>
        <p className="text-base md:text-xl font-medium px-8">
          {article.description}
        </p>
        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded-xl md:rounded-3xl md:h-[631px] object-cover object-right-top overflow-hidden"
        />
        <div className="flex flex-row items-center w-full justify-between">
          <div className="flex flex-row items-center gap-2">
            <p className="text-green-700 text-sm font-semibold">SHARE IT</p>
            {/* Social Media Links */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://fkf-electoral-board.netlify.app/news/${title_slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white"
            >
              <FaFacebookF />
            </a>
            <a
              href={`https://www.instagram.com/?url=https://fkf-electoral-board.netlify.app/news/${title_slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white"
            >
              <FaInstagram />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=https://fkf-electoral-board.netlify.app/news/${title_slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white"
            >
              <FaXTwitter />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?url=https://fkf-electoral-board.netlify.app/news/${title_slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white"
            >
              <FaLinkedinIn />
            </a>
          </div>

          {/* Like Button */}
          <div
            className={`flex flex-row items-center gap-2 font-semibold cursor-pointer ${
              liked ? "text-green-700" : "text-gray-700"
            }`}
            onClick={handleLikeClick}
          >
            <FiThumbsUp />
            <p>{likes}</p>
          </div>
        </div>
      </div>
      <Border />
      <div className="flex flex-col items-center justify-center px-40 py-5 gap-10 w-[75%]">
        <p>{article.body}</p>
      </div>
      <Border />
      <div className="flex flex-col items-center justify-center px-20 py-10 gap-10">
        <div className="flex-center flex-col gap-2">
          <Header title="Related Articles" />
          <h3 className="text-4xl font-semibold text-center md:text-left">
            You might like
            <span className="text-transparent bg-gradient-to-b from-[#004324] via-[#116937] to-[#2AA74B] bg-clip-text">
              {" "}
              These
            </span>
          </h3>
          <div className="flex flex-row items-center gap-4">
            <div className="p-2 rounded-md cursor-pointer transition-all ease-in duration-500 bg-gradient-to-r from-red-700/40 to-green-700/40">
              <MdKeyboardArrowLeft />
            </div>
            <div className="grid grid-cols-2 gap-4 py-16">
              {relatedArticles.slice(0, 2).map((relatedArticle) => (
                <Link
                  to={`/news/${relatedArticle.title_slug}`}
                  key={relatedArticle.id}
                  onClick={() => window.scrollTo(0, 0)}
                  style={{ backgroundImage: `url(${relatedArticle.image}) ` }}
                  className="rounded-sm md:rounded-lg bg-cover bg-right-top overflow-hidden hover:scale-105 transition-all duration-300 ease-in"
                >
                  <div className="flex flex-col items-start justify-end gap-2 p-4 shadow-inner min-h-[300px] hover:cursor-pointer transition-all duration-300 ease-in hover:bg-gradient-to-b hover:from-white/30 hover:via-[#09371D]/50 hover:to-[#09371D] z-10 w-full  md:h-[200px] bg-cover bg-right-top overflow-hidden">
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
            <div className="p-2 rounded-md cursor-pointer transition-all ease-in duration-500 bg-gradient-to-r from-red-700 to-green-700 text-white">
              <MdKeyboardArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
