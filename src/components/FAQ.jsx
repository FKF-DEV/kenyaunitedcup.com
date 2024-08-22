import {AddOutlined, RemoveOutlined} from '@mui/icons-material';

// eslint-disable-next-line no-unused-vars
// import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is FKF Electoral Board?",
    answer:
      "A board that oversees National and County FKF Elections, and may appoint an individual or institution to oversee sub-county elections.",
  },
  {
    id: 2,
    question: "What is FKF Electoral Board?",
    answer:
      "A board that oversees National and County FKF Elections, and may appoint an individual or institution to oversee sub-county elections.",
  },
  {
    id: 3,
    question: "What is FKF Electoral Board?",
    answer:
      "A board that oversees National and County FKF Elections, and may appoint an individual or institution to oversee sub-county elections.",
  },
  {
    id: 4,
    question: "What is FKF Electoral Board?",
    answer:
      "A board that oversees National and County FKF Elections, and may appoint an individual or institution to oversee sub-county elections.",
  },
];

export default function FAQ() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="flex-col justify-center items-center gap-4 w-full max-w-6xl">
      {questions.map((question, index) => {
        return (
          <div
            key={question.id}
            className={`rounded-xl bg-white ${activeQuestion === index && "mb-4"}`}
          >
            <h2 className={`${activeQuestion === index ? "" : "mb-8"} font-semibold`} id={`flush-heading${index + 1}`}>
              <button
                className={`group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base transition ${activeQuestion === index
                    ? ""
                    : "overflow-anchor:none hover:z-[2] focus:z-[3]"} focus:outline-none ${activeQuestion === index
                    ? "text-primary"
                    : "&:not([data-te-collapse-collapsed]):text-primary"} ${activeQuestion === index
                    ? "boxShadow:inset_0_-1px_0_rgba(229,231,235)"
                    : "&:not([data-te-collapse-collapsed]):boxShadow:inset_0_-1px_0_rgba(229,231,235)"} dark:&:not([data-te-collapse-collapsed]):text-primary-400`}
                type="button"
                data-te-collapse-init
                data-te-target={`#flush-collapse${index + 1}`}
                aria-expanded={activeQuestion === index ? "true" : "false"}
                aria-controls={`flush-collapse${index + 1}`}
                onClick={() => toggleQuestion(index)}
              >
                {question.question}
                <span
                  className={`ml-auto h-10 w-10 shrink-0 text-black rounded-md flex items-center justify-center overflow-hidden ${activeQuestion === index ? "text-primary" : ""}`}
                >
                  {activeQuestion === index ? <RemoveOutlined /> :
                    <AddOutlined />}
                </span>
              </button>
            </h2>
            <div
              id={`flush-collapse${index + 1}`}
              className={`${activeQuestion === index ? "" : "invisible hidden"} border-0`}
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby={`flush-heading${index + 1}`}
              data-te-parent="#accordionFlushExample"
            >
              <div className="pb-4 px-5">{question.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

