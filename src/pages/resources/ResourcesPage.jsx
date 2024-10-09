import React, { useState, useEffect } from "react";
import axios from "axios";
import Hero from "./sections/Hero";
import { Border } from "../../components";
import Categories from "./sections/Categories";
import DocumentCards from "./sections/DocumentCards";

const ResourcesPage = () => {
  const [documents, setDocuments] = useState([]);
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/resources/`);
        setDocuments(response.data.results);
        setFilteredDocuments(response.data.results); // Initially, show all documents
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocuments();
  }, [BASE_URL]);

  return (
    <main className="bg-gray-100 overflow-hidden">
      <Hero />
      <Border />
      {/* Pass setFilteredDocuments and full documents list to Categories */}
      <Categories
        setFilteredDocuments={setFilteredDocuments}
        documents={documents}
      />
      <DocumentCards filteredDocuments={filteredDocuments} />
    </main>
  );
};

export default ResourcesPage;
