/* eslint-disable react/prop-types */
const Header = ({ title, color = "black" }) => {
  return (
    <div className="ring ring-gray-50 bg-white flex-center gap-1 px-2.5 py-1 rounded-full shadow-md">
      <hr className="w-3 h-0.5 bg-black" />
      <span className={`text-sm font-semibold capitalize text-${color}`}>
        {title}
      </span>
      <hr className="w-3 h-0.5 bg-black" />
    </div>
  );
};

export default Header;
