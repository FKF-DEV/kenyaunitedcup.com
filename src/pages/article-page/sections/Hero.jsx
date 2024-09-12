import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiThumbsUp } from "react-icons/fi";

const Hero = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [article, setArticle] = useState({});
  const { title_slug } = useParams();
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/news/${title_slug}/`);
        const articleData = response.data;
        setArticle(articleData);
        setLikes(articleData.likes);
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
          setLiked(true);
          setLikes((prevLikes) => prevLikes + 1);
        }
      } catch (error) {
        console.error("Error liking the article:", error);
      }
    }
  };

  return (
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
  );
};

export default Hero;
