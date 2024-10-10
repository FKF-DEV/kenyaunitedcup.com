import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Categories = ({ setFilteredDocuments, documents }) => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0); // Track current index for scrolling
  const BASE_URL = import.meta.env.VITE_API_URL;
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/resources/`);
      const uniqueCategories = getUniqueCategories(response.data.results);
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getUniqueCategories = (data) => {
    const unique = [];
    data.forEach((item) => {
      if (
        !unique.some((cat) => cat.resource_category === item.resource_category)
      ) {
        unique.push(item);
      }
    });
    return unique;
  };

  useEffect(() => {
    fetchCategories();
  }, [BASE_URL]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredDocuments(documents);
    } else {
      const filteredDocs = documents.filter(
        (doc) => doc.resource_category === category
      );
      setFilteredDocuments(filteredDocs);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < categories.length - (isMobile ? 2 : 3)) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const categoriesToDisplay = categories.slice(
    currentIndex,
    currentIndex + (isMobile ? 2 : 3)
  );

  return (
    <div className="flex flex-row items-center justify-start md:justify-center gap-2 mb-4 w-full overflow-x-auto p-4">
      <button
        onClick={handlePrevClick}
        className={`p-2 rounded-md cursor-pointer transition-all ease-in duration-500 ${
          currentIndex === 0
            ? "bg-gradient-to-r from-red-700/40 to-green-700/40 cursor-not-allowed"
            : "bg-gradient-to-r from-red-700 to-green-700 text-white"
        }`}
      >
        <MdKeyboardArrowLeft />
      </button>

      <button
        onClick={() => handleCategoryClick("All")}
        className={`rounded-lg px-2 py-1 ${
          activeCategory === "All"
            ? "bg-gradient-to-r from-red-700 to-green-700 text-white"
            : "bg-white text-primary"
        }`}
      >
        All
      </button>

      {categoriesToDisplay.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.resource_category)}
          className={`rounded-lg px-2 py-1 ${
            activeCategory === category.resource_category
              ? "bg-gradient-to-r from-red-700 to-green-700 text-white"
              : "bg-white text-primary"
          }`}
        >
          {category.resource_category}
        </button>
      ))}

      <button
        onClick={handleNextClick}
        className={`p-2 rounded-md cursor-pointer transition-all ease-in duration-500 ${
          currentIndex >= categories.length - (isMobile ? 2 : 3)
            ? "bg-gradient-to-r from-red-700/40 to-green-700/40 cursor-not-allowed"
            : "bg-gradient-to-r from-red-700 to-green-700 text-white"
        }`}
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Categories;
