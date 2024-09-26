import { Link } from "react-router-dom";
import { message } from "../assets";
import Marquee from "react-fast-marquee";

const NewsBanner = () => {
  return (
    <div className="text-white bg-black py-2 px-4 flex flex-row items-center gap-2">
      <img src={message} alt="message" className="size-6 object-contain" />
      <Marquee pauseOnHover>
        <div className="flex items-center flex-grow gap-4">
          <div className="flex items-center space-x-1 text-sm font-normal">
            <p className="">FKF Elections 2024 Timelines are now up.</p>
            <Link to="/" className="text-green-700 underline font-semibold">
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
            <Link to="/" className="text-green-700 underline font-semibold">
              View
            </Link>
          </div>
          <div className="h-0.5 bg-white w-8" />

          <div className="flex items-center space-x-1 text-sm font-normal">
            <p className="">2024 Election Guidelines and Regulations are now up.</p>
            <Link to="/" className="text-green-700 underline font-semibold">
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
