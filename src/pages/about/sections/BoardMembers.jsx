import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Header } from "../../../components";

const BoardMembers = () => {
  const [members, setMembers] = useState([]);
  const scrollRef = useRef(null);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/members/`);
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, [BASE_URL]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollPosition(scrollRef.current.scrollLeft);
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    window.addEventListener("resize", handleScroll);

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <section className="max-w-7xl mx-auto flex items-center flex-col gap-8 pb-10">
      <div className="flex-center flex-col gap-3">
        <Header title="Board Members" />
        <h3 className="text-2xl md:text-4xl font-semibold text-center">
          Members of the
          <span className="text-transparent bg-gradient-to-b from-[#004324] via-[#116937] to-[#2AA74B] bg-clip-text">
            {" "}
            Electoral Board{" "}
          </span>
        </h3>
        <p className="mt-4 text-sm font-normal text-center max-w-lg">
          Our Board is composed of experienced professionals with a deep
          commitment to the principles of democracy and governance in sports.
        </p>
      </div>

      {/* Scrollable Members Section */}
      <div
        ref={scrollRef}
        className="flex justify-between w-full gap-8 overflow-x-scroll px-2 scrollbar-2 scroll-smooth"
      >
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-center w-full h-full"
          >
            <BoardMember member={member} />
          </div>
        ))}
      </div>
    </section>
  );
};

const BoardMember = ({ member }) => {
  const { name, email, image, title } = member;

  return (
    <div className="p-1 bg-white rounded-2xl">
      <div className="flex flex-col bg-gray-100 rounded-xl overflow-hidden size-full md:w-[440px]">
        <img
          src={image}
          alt={name}
          className="md:h-[500px] object-cover w-full"
        />
        <div className="md:h-1/4 py-2 px-3 flex flex-col gap-2">
          <h4 className="font-medium text-lg md:text-xl">{name}</h4>
          <div className="flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 6.98932V5.48932C6 3.00404 8.01472 0.989319 10.5 0.989319H13.5C15.9853 0.989319 18 3.00404 18 5.48932V6.98932H21C22.6569 6.98932 24 8.33246 24 9.98932V15.3455C20.2645 16.7314 16.2223 17.4892 12 17.4892C7.77772 17.4892 3.73555 16.7314 0 15.3454V9.98932C0 8.33246 1.34315 6.98932 3 6.98932H6ZM9 5.48932C9 4.66089 9.67157 3.98932 10.5 3.98932H13.5C14.3284 3.98932 15 4.66089 15 5.48932V6.98932H9V5.48932ZM10.5 12.9893C10.5 12.1609 11.1716 11.4893 12 11.4893H12.015C12.8434 11.4893 13.515 12.1609 13.515 12.9893C13.515 13.8177 12.8434 14.4893 12.015 14.4893H12C11.1716 14.4893 10.5 13.8177 10.5 12.9893Z"
                fill="#475467"
              />
              <path
                d="M0 18.5277V21.9893C0 23.6462 1.34315 24.9893 3 24.9893H21C22.6569 24.9893 24 23.6462 24 21.9893V18.5277C20.2308 19.8 16.1946 20.4892 12 20.4892C7.80544 20.4892 3.76919 19.8 0 18.5277Z"
                fill="#475467"
              />
            </svg>
            <span className="text-sm md:text-base text-[#475467]">{title}</span>
          </div>
          <div className="flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.8225 7.69343C3.31083 8.01322 3 8.57405 3 9.17743V16.0825C3 17.049 3.7835 17.8325 4.75 17.8325H15.25C16.2165 17.8325 17 17.049 17 16.0825V9.17743C17 8.57405 16.6892 8.01323 16.1775 7.69343L10.9275 4.41218C10.36 4.05751 9.63998 4.05751 9.0725 4.41218L3.8225 7.69343ZM6.11036 9.81287C5.70828 9.54481 5.16501 9.65346 4.89696 10.0556C4.6289 10.4576 4.73756 10.9998 5.13965 11.2679L9.99999 14.3742L14.8603 11.2679C15.2624 10.9998 15.3711 10.4576 15.103 10.0556C14.835 9.65346 14.2917 9.54481 13.8896 9.81287L10 12.254L6.11036 9.81287Z"
                fill="#475467"
              />
            </svg>
            <span className="text-sm md:text-base text-[#475467]">{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMembers;

