import { useState, useEffect } from "react";
import axios from "axios";
import { cloudDownload } from "../../../assets";
import { Header } from "../../../components";

function ElectionsFiles() {
  const [resources, setResources] = useState([]);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/resources/`);
        // Update to access the `results` field from the response data
        setResources(response.data.results || []);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, [BASE_URL]);

  return (
    <div
      id="elections-files"
      className="max-w-7xl h-[664px] mx-5 md:mx-auto flex-between flex-col md:flex-row"
    >
      <div className="flex-1 h-full flex-center md:flex-start flex-col gap-2.5 pr-12">
        <Header title="Election Files" />
        <h3 className="text-4xl font-semibold text-center md:text-left">
          All you
          <span className="text-transparent bg-gradient-to-b from-[#004324] to-[#116937] bg-clip-text">
            {" "}
            need to know{" "}
          </span>
          about the
          <span className="text-transparent bg-gradient-to-b from-[#004324] via-[#116937] to-[#2AA74B] bg-clip-text">
            {" "}
            electoral process
          </span>
        </h3>

        <p className="mt-4 text-base font-normal text-center md:text-left">
          Documents to get you up to speed on all you need to know about our
          electoral process including regulations, the voter’s register,
          candidates or the final results.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex-1 flex flex-col gap-4 overflow-y-scroll h-full px-2 md:px-0 py-2 scrollbar">
        {resources.map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
}

export default ElectionsFiles;

const FileCard = ({ file }) => {
  const { title, document } = file;

  return (
    <div className="w-full bg-white rounded-xl p-6 flex flex-col">
      <div className="flex-between">
        <h5 className="text-base font-semibold">{title}</h5>
        <button type="button" className="size-8">
          <a href={document} target="_blank" rel="noopener noreferrer">
            <img
              src={cloudDownload}
              alt="cloud-download"
              className="size-full object-contain"
            />
          </a>
        </button>
      </div>
    </div>
  );
};
