import React, { useState, useEffect } from "react";
import { Border } from "../../components";
import Hero from "./sections/Hero";
import Articles from "./sections/Articles";
import Pagination from "./sections/Pagination";
import axios from "axios";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(5);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/news/`);
        const articlesWithImagePath = response.data.results.map((article) => ({
          ...article,
          image: article.image.startsWith("http")
            ? article.image
            : `${BASE_URL}${article.image}`,
        }));
        setArticles(articlesWithImagePath);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [BASE_URL]);

  // Get current articles for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0); // Scroll to top when page changes
    }
  };

  return (
    <div className="bg-gray-100">
      <Hero />
      <Border />
      {/* Pass paginated articles to the Articles component */}
      <Articles articles={currentArticles} />
      <Border />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default AllArticles;
