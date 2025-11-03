import { Link, useLocation } from "react-router-dom";
import { navLinks } from ".";

function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  const { pathname } = useLocation();

  return (
    <section className="bg-[linear-gradient(-90deg,black_0%,#7f1d1d_50%,#166534_100%)] py-4 text-white">
      <footer className="max-w-7xl mx-auto flex items-center justify-between flex-col gap-3 md:flex-row px-4">
        <div className="flex flex-col items-center md:items-start leading-tight">
          <Link to="/" className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-black via-white to-red-700 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
            Kenya United Cup
          </Link>
          <span className="text-[10px] md:text-xs text-white/90 uppercase tracking-wide mt-1">
            ONE DREAM. ONE GAME. ONE NATION
          </span>
        </div>

        <div className="flex flex-col items-center">
          <nav className="flex items-center gap-4 md:gap-8">
            {navLinks
              .filter(({ link, title }) => link !== "/news" && link !== "/files" && title !== "News" && title !== "Files")
              .map(({ id, title, link }) => (
                <Link
                  key={id}
                  to={link}
                  className={`text-red-300 hover:text-white font-medium transition-colors ${
                    link === pathname ? "text-white font-bold" : ""
                  }`}
                >
                  {title}
                </Link>
              ))}
          </nav>
          <div className="text-center text-sm text-white/90 mt-2 md:mt-0">
            &copy; {year} Kenya United Cup. All rights reserved.
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="mailto:info@kenyaunitedcup.com"
            className="text-red-300 hover:text-white underline text-sm font-semibold transition-colors"
          >
            info@kenyaunitedcup.com
          </a>{" "}
        </div>
      </footer>
    </section>
  );
}

export default Footer;
