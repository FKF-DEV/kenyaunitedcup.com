import { Link } from "react-router-dom";
import { message } from "../assets";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import axios from "axios";

const NewsBanner = () => {
  const [recentResource, setRecentResource] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    // Fetch the resource data from the API
    const fetchResources = async () => {
      try {
        const response = await axios.get("VITE_API_URL/api/resources/");
        const resources = response.data.results;
        if (resources && resources.length > 0) {
          setRecentResource(resources[0]); // Use the most recent resource
        } else {
          console.error("No resources available");
        }
      } catch (error) {
        console.error("Error fetching resources:", error);
      } finally {
        setLoading(false); // Set loading to false once API call completes
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
        <div className="flex items-center flex-grow gap-4">
          {recentResource ? (
            // Repeat the most recent resource 4 times
            Array(4)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-1 text-sm font-normal"
                >
                  <p>
                    {recentResource.title}, {recentResource.description}!
                  </p>
                  <Link
                    to={recentResource.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 underline font-semibold"
                  >
                    View
                  </Link>
                  <div className="h-0.5 bg-white w-8" />
                </div>
              ))
          ) : (
            <p>No resources available</p>
          )}
        </div>
      </Marquee>
    </div>
  );
};

export default NewsBanner;
