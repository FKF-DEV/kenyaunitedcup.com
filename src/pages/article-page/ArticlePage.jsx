import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Border } from "../../components";
import Hero from "./sections/Hero";
import RelatedArticles from "./sections/RelatedArticles";

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const { title_slug } = useParams();
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/news/${title_slug}/`);
        const articleData = response.data;
        setArticle(articleData);
      } catch (error) {
        console.error("Error fetching the article:", error);
      }
    };

    fetchArticle();
  }, [BASE_URL, title_slug]);

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center py-5 md:py-10">
      <Hero />
      <Border />
      <div className="flex flex-col items-center justify-center px-6 md:px-40 py-5 gap-10 md:w-[75%]">
        {article.body && (
          <div
            dangerouslySetInnerHTML={{ __html: article.body }}
            className="prose prose-a:text-primary md:first-letter:text-7xl first-letter:text-5xl first-letter:font-bold first-letter:text-black first-letter:mr-3 text-sm sm:text-base"
          />
        )}
      </div>
      <Border />
      <RelatedArticles />
    </div>
  );
};

export default ArticlePage;
