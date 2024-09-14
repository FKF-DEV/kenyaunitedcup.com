import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { logo } from "../assets";
import { navLinks } from ".";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="h-20 relative z-50">
      <div className="mx-auto w-full h-full max-w-7xl flex-between">
        {/* logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-24 md:w-32 object-contain" />
        </Link>

        <nav className="hidden md:flex-between gap-8 pr-8 text-base font-semibold">
          {navLinks.map(({ id, title, link }) => (
            <Link
              key={id}
              to={link}
              className={`${
                link === pathname
                  ? "text-primary font-bold"
                  : "text-black font-medium"
              } `}
            >
              {title}
            </Link>
          ))}
        </nav>

        <Link
          to={"/"}
          className="bg-gradient-to-b from-[#22CF6C] to-[#116937] text-white px-6 py-3 text-base font-semibold rounded-full hidden md:flex"
        >
          Election Results
        </Link>

        <div className="flex-center md:hidden mr-3 px-1">
          {isOpen ? (
            <CloseRoundedIcon
              fontSize="large"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          ) : (
            <MenuRoundedIcon
              fontSize="large"
              onClick={() => setIsOpen((prev) => !prev)}
            />
          )}
        </div>

        <div
          className="absolute top-20 left-0 bg-white h-[calc(100vh-80px)] border-t w-screen flex-center flex-col gap-12 text-3xl"
          style={isOpen ? { display: "flex" } : { display: "none" }}
        >
          {navLinks.map(({ id, title, link }) => (
            <Link
              key={id}
              to={link}
              className={`${
                link === pathname
                  ? "text-primary font-bold"
                  : "text-black font-medium"
              } `}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {title}
            </Link>
          ))}

          <Link
            to={"/"}
            className="bg-gradient-to-b from-[#22CF6C] to-[#116937] text-white px-6 py-3 text-base font-semibold rounded-full md:hidden flex"
          >
            Election Results
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
