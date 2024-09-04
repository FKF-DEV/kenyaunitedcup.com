import { Link } from "react-router-dom";
import { FAQ, Header } from "../../../components";

function FAQs() {
  return (
    <div className="flex items-center flex-col md:flex-row w-full max-w-7xl mx-auto pb-8">
      <div className="flex-1">
        <FAQ />
      </div>

      <div className="flex-1 flex items-center md:items-start flex-col gap-2 md:pl-32 lg:pl-44">
        <Header title="faq" />
        <h3 className="text-4xl font-semibold text-center md:text-left">
          Your burning
          <span className="text-transparent bg-gradient-to-b from-[#004324] to-[#116937] bg-clip-text">
            {" "}
            questions,{" "}
          </span>
          <span className="text-transparent bg-gradient-to-b from-[#004324] via-[#116937] to-[#2AA74B] bg-clip-text">
            {" "}
            answered
          </span>
        </h3>

        <p className="my-4 text-sm font-normal text-center md:text-left px-2">
          We promised transparency and openness and we tend to keep our word.
          Here’s some of the most asked questions, by you, answered, by us. If
          you feel like your question still hasn’t been answered, feel free to
          shoot us an email and we’d be glad to get back to you as soon as
          possible.
        </p>

        <Link
          to="/contact-us"
          className="px-6 py-3 border border-gray-50 bg-gradient-to-r from-gray-300 to-gray-100 rounded-full transition-all duration-300 ease-in hover:gap-2.5 hover:ring ring-[#0F6B38]"
        >
          <span className="text-transparent bg-gradient-to-b from-[#004324] via-[#116937] to-[#2AA74B] bg-clip-text text-base font-semibold">
            Contact Us
          </span>
        </Link>
      </div>
    </div>
  );
}

export default FAQs;
