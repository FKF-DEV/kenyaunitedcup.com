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
          <div className="flex items-center space-x-1 text-sm font-normal">
            <p className="">FKF Elections 2024 Timelines are now up.</p>
            <Link to="https://eb-api.footballkenya.org/media/documents/FKF_ELECTION_ROADMAP.PDF" className="text-green-700 underline font-semibold">
              View
            </Link>
          </div>
          {/* <div className="h-0.5 bg-white w-8" /> */}

          {/* <div className="flex items-center space-x-1 text-sm font-normal">
            <p className="">March 2023 Election results are now up.</p>
            <Link to="/" className="text-green-700 underline font-semibold">
              View
            </Link>
          </div> */}
          <div className="h-0.5 bg-white w-8" />

          <div className="flex items-center space-x-1 text-sm font-normal">
            <p className="">FKF 2019/2020 [REVISED]Electoral Code is now up.</p>
            <Link to="https://eb-api.footballkenya.org/media/documents/FKF_ELECTORAL_CODE_2019_2020_REVISED.PDF" className="text-green-700 underline font-semibold">
              View
            </Link>
          </div>
          <div className="h-0.5 bg-white w-8" />

          <div className="flex items-center space-x-1 text-sm font-normal">
            <p className="">2024 Election Guidelines and Regulations are now up.</p>
            <Link to="https://eb-api.footballkenya.org/media/documents/FKF_ELECTION_GUIDELINES__REGULATIONS.PDF" className="text-green-700 underline font-semibold">
              View
            </Link>
          </div>
          <div className="h-0.5 bg-white w-8" />

        </div>
      </Marquee>
    </div>
  );
};

export default NewsBanner;
