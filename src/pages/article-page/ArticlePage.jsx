import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Border, Header } from "../../components";
import { Link } from "react-router-dom";

const ArticlePage = () => {
  const { title_slug } = useParams();
  const [article, setArticle] = useState({});
  const [relatedArticles, setRelatedArticles] = useState([]);
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

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center px-40 py-10 gap-10">
        <h3 className="text-xl md:text-3xl font-semibold text-transparent bg-gradient-to-b from-[#004324] to-[#116937]/70 bg-clip-text">
          {article.title}
        </h3>
        <p className="text-base md:text-xl font-medium px-8">
          {article.description}
        </p>
        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded-2xl md:rounded-[32px] md:h-[631px] object-cover object-right-top overflow-hidden"
        />
      </div>
      <Border />
      <div className="flex flex-col items-center justify-center px-40 py-10 gap-10">
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
          <div className="grid grid-cols-2 gap-4 py-16">
            {relatedArticles.slice(0, 2).map((relatedArticle) => (
              <Link to={`/news/${relatedArticle.title_slug}`} key={relatedArticle.id} onClick={() => window.scrollTo(0, 0)}>
                <div
                  className="flex flex-col items-start justify-center gap-2 p-4 hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in"
                >
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full rounded-sm md:rounded-lg md:h-[200px] object-cover overflow-hidden "
                  />
                  <h4 className="text-lg font-semibold self-start">
                    {relatedArticle.title}
                  </h4>
                  <p className="text-sm font-normal line-clamp-2">
                    {relatedArticle.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
