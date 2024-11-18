import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { docBackground } from "../../../assets";
import { docWatermark } from "../../../assets";

const DocumentCards = ({ filteredDocuments }) => {
  const [documents, setDocuments] = useState([]);
  const [visibleDocuments, setVisibleDocuments] = useState(12); // Initial number of visible documents
  const BASE_URL = import.meta.env.VITE_API_URL;

  const fetchDocuments = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/resources/`);
      const documents = response.data.results;
      setDocuments(documents);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, [BASE_URL]);

  const loadMore = () => {
    setVisibleDocuments((prev) => prev + 12); // Load 12 more documents on button click
  };

  // Filter the documents based on the current visible limit
  const displayedDocuments = filteredDocuments.slice(0, visibleDocuments);

  return (
    <div>
      <div className="m-8 md:m-24 grid grid-cols-1 gap-10 md:grid-cols-4 overflow-hidden">
        {displayedDocuments.map((document) => (
          <div key={document.id} className="relative">
            <div className="p-4 border border-gray-200 rounded-xl min-w-[300px] min-h-[400px] relative overflow-hidden">
              <img
                src={docWatermark}
                alt="Watermark"
                className="absolute inset-0 m-auto w-4/5 h-4/5 object-contain"
              />
              <img
                src={docBackground}
                alt="Document Background"
                className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
              />
              <div className="absolute bottom-0 left-0 p-4 w-full flex flex-col gap-4 z-10">
                <p className="text-primary text-xl font-bold">
                  {document.title}
                </p>
                <p className="text-gray-500 text-sm font-medium">
                  {document.resource_category}
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-3 w-full">
              <Link
                to={document.document.replace(/^http:\/\//i, "https://")} // Replace HTTP with HTTPS
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-primary rounded-lg bg-white text-primary font-semibold text-center w-full"
              >
                View / Download
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredDocuments.length > visibleDocuments && (
        <div className="flex justify-center mt-6 mb-16 ">
          <button
            onClick={loadMore}
            className="py-2 px-8 border border-primary rounded-full bg-white text-primary font-semibold transition-all duration-300 ease-in hover:gap-2.5 hover:ring ring-[#0F6B38]"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default DocumentCards;
