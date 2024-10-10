import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import documentCards from "../../../../public/document-card.svg";
import documentWatermark from "../../../../public/documentwatermark.svg";

const DocumentCards = ({ filteredDocuments }) => {
  const [documents, setDocuments] = useState([]);
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

  return (
    <div className="m-8 md:m-24 grid grid-cols-1 gap-10 md:grid-cols-3 overflow-hidden">
      {filteredDocuments.map((document) => (
        <div key={document.id} className="relative">
          <div
            className="p-4 border border-gray-200 rounded-xl min-w-[300px] min-h-[400px] relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${documentWatermark}), url(${documentCards})`,
              backgroundPosition: "center, center",
              backgroundSize: "250px, cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "normal",
            }}
          >
            <div className="absolute bottom-0 left-0 p-4  w-full flex flex-col gap-4">
              <p className="text-primary text-xl font-bold">{document.title}</p>
              <p className="text-gray-500 text-sm font-medium">{document.resource_category}</p>
            </div>
          </div>

          <div className="flex justify-center mt-3 w-full">
            <Link
              to={document.document}
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
  );
};

export default DocumentCards;
