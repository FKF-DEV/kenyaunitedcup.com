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
        setLikes(articleData.likes);
      } catch (error) {
        console.error("Error fetching the article:", error);
      }
    };

    fetchArticle();
  }, [BASE_URL, title_slug]);
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center py-10">
      <Hero />
      <Border />
      <div className="flex flex-col items-center justify-center px-40 py-5 gap-10 w-[75%]">
        <p>{article.body}</p>
      </div>
      <Border />
      <RelatedArticles />
    </div>
  );
};

export default ArticlePage;
