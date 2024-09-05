import { patrick } from "../../../assets";
import { Header } from "../../../components";

const BoardMembers = () => {
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

      <div className="flex justify-between w-full gap-8 overflow-scroll px-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <BoardMember key={i} />
        ))}
      </div>
    </section>
  );
};

export default BoardMembers;

const BoardMember = () => {
  return (
    <div className="p-1 bg-white rounded-2xl">
      <div className="flex flex-col bg-gray-100 rounded-xl overflow-hidden size-full md:w-[440px]">
        <img
          src={patrick}
          alt="board-member"
          className="md:h-3/4 object-cover w-full"
        />

        <div className="md:h-1/4 py-2 px-3 flex flex-col gap-2">
          <h4 className="font-medium text-lg md:text-xl">Patrick Onyango</h4>

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

            <span className="text-sm md:text-base text-[#475467]">
              Secretary
            </span>
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
                d="M3 4.86432C3 4.38107 3.39175 3.98932 3.875 3.98932H5.75876C6.1865 3.98932 6.55154 4.29856 6.62186 4.72047L7.26876 8.60186C7.33191 8.98076 7.14055 9.35654 6.79697 9.52833L5.44235 10.2056C6.41911 12.6328 8.35647 14.5702 10.7837 15.547L11.461 14.1923C11.6328 13.8488 12.0086 13.6574 12.3875 13.7206L16.2688 14.3675C16.6908 14.4378 17 14.8028 17 15.2306V17.1143C17 17.5976 16.6082 17.9893 16.125 17.9893H14.375C8.09276 17.9893 3 12.8966 3 6.61432V4.86432Z"
                fill="#475467"
              />
            </svg>

            <span className="text-sm md:text-base text-[#475467]">
              0700000000
            </span>
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
                d="M3.8225 7.69343C3.31083 8.01322 3 8.57405 3 9.17743V16.0825C3 17.049 3.7835 17.8325 4.75 17.8325H15.25C16.2165 17.8325 17 17.049 17 16.0825V9.17743C17 8.57405 16.6892 8.01323 16.1775 7.69343L10.9275 4.41218C10.36 4.05751 9.63998 4.05751 9.0725 4.41218L3.8225 7.69343ZM6.11036 9.81287C5.70828 9.54481 5.16501 9.65346 4.89696 10.0556C4.6289 10.4576 4.73755 11.0009 5.13964 11.269L9.51464 14.1856C9.80855 14.3816 10.1915 14.3816 10.4854 14.1856L14.8604 11.269C15.2625 11.0009 15.3711 10.4576 15.103 10.0556C14.835 9.65346 14.2917 9.54481 13.8896 9.81287L10 12.406L6.11036 9.81287Z"
                fill="#475467"
              />
            </svg>

            <span className="text-sm md:text-base text-[#475467]">
              email@fkfelectoral.org
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
