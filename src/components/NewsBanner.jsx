import { Link } from "react-router-dom";
import { message } from "../assets";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import axios from "axios";

const NewsBanner = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/resources/`);
        const fetchedResources = response.data.results;
        if (fetchedResources && fetchedResources.length > 0) {
          setResources(fetchedResources);
        } else {
          console.error("No resources available");
        }
      } catch (error) {
        console.error("Error fetching resources:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) {
    return <p>Loading resources...</p>;
  }

  return (
    <div className="text-white bg-black py-2 px-4 flex flex-row items-center gap-2">
      <img src={message} alt="message" className="size-6 object-contain" />
      <Marquee pauseOnHover>
        <div className="flex items-center flex-grow gap-8">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="flex items-center space-x-1 text-sm font-normal"
            >
              <p>{resource.title}</p>
              <Link
                to={resource.document}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 underline font-semibold pl-2 pr-8"
              >
                View
              </Link>
              <div className="h-0.5 bg-white w-8"/>{" "}
            </div>
          ))}
        </div>

      </Marquee>
    </div>
  );
};

export default NewsBanner;
