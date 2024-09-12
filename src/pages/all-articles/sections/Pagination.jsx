import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 pb-16">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-3 rounded-lg ${
          currentPage === 1
            ? "bg-gradient-to-r from-red-700/40 to-green-700/40 cursor-not-allowed"
            : "bg-gradient-to-r from-red-700 to-green-700 text-white"
        }`}
      >
        <MdKeyboardArrowLeft />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded-lg ${
            currentPage === page
              ? "bg-gradient-to-r from-red-700/40 to-green-700/40 cursor-not-allowed"
              : "bg-gradient-to-r from-red-700 to-green-700 text-white"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-3 rounded-lg ${
          currentPage === totalPages
            ? "bg-gradient-to-r from-red-700/40 to-green-700/40 cursor-not-allowed"
            : "bg-gradient-to-r from-red-700 to-green-700 text-white"
        }`}
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
