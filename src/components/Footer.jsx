import { Link, useLocation } from "react-router-dom";
import { logo } from "../assets";
import { navLinks } from ".";

function Footer() {
  const now = new Date();
  const year = now.getFullYear();

  const { pathname } = useLocation();

  return (
    <section className="bg-white">
      <footer className="max-w-7xl mx-auto py-8 flex items-center justify-between flex-col gap-2 md:flex-row">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>

        <nav className="flex items-center gap-4 md:gap-8">
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

        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="mailto:info@eb.footballkenya.org"
            className="text-primary underline"
          >
            info@eb.footballkenya.org
          </a>{" "}
          <p className="text-sm font-normal">
            © {year} FKF Electoral Board. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
