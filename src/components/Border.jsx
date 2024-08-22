import { ball } from "../assets";

const Border = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-2 md:gap-4 my-12 w-full">
      <div className="flex flex-grow items-center gap-0">
        <div className="bg-red-700 h-0.5 w-1/3" />
        <div className="bg-black h-0.5 w-1/3" />
        <div className="bg-green-700 h-0.5 w-1/3" />
      </div>
      <div className="size-6">
        <img src={ball} alt="ball" className="size-full object-contain" />
      </div>
      <div className="flex flex-grow">
        <div className="bg-red-700 h-0.5 w-1/3" />
        <div className="bg-black h-0.5 w-1/3" />
        <div className="bg-green-700 h-0.5 w-1/3" />
      </div>
    </div>
  );
};

export default Border;
