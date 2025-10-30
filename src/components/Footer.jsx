import { Link, useLocation } from "react-router-dom";
import { navLinks } from ".";

function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  const { pathname } = useLocation();

  return (
    <section className="bg-transparent">
      <footer className="max-w-7xl mx-auto py-2 flex items-center justify-between flex-col gap-1 md:flex-row">
        <div className="flex flex-col items-center md:items-start leading-tight">
          <Link to="/" className="text-xl md:text-2xl font-extrabold text-black">
            Kenya United Cup
          </Link>
          <span className="text-[10px] md:text-xs text-gray-600 uppercase tracking-wide">
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
          <p className="text-sm font-normal text-center w-full mt-1">
            © {year} Kenya United Cup. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="mailto:niaje@kenyaunited.com"
            className="text-primary underline text-sm font-semibold"
          >
            niaje@kenyaunited.com
          </a>{" "}
          <Link to="/privacy-policy" className="text-primary underline text-sm font-semibold">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
