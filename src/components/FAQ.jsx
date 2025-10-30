// eslint-disable-next-line no-unused-vars
// import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";

const questions = [
  {
    id: 1,
    question: "Who can register for the Kenya United Cup?",
    answer:
      "The tournament is open to teams from all 47 counties. Clubs, academies, universities, and community teams may register as long as they meet the eligibility rules for their category.",
  },
  {
    id: 2,
    question: "How do we register and what is the deadline?",
    answer:
      "Team managers should complete the online registration form and upload required documents (player IDs, consent forms for minors). Registration closes four weeks before kickoff or once slots are filled.",
  },
  {
    id: 3,
    question: "Are there age categories or divisions?",
    answer:
      "Yes. The Cup features Senior (Open), U23, U18, and Women’s divisions. Teams may only compete in one division per tournament.",
  },
  {
    id: 4,
    question: "What is the squad size and player eligibility?",
    answer:
      "Each squad may register up to 25 players and 5 officials. Players must be Kenyan citizens or legally resident, and may not be registered by more than one team in the tournament.",
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
            className={`rounded-xl bg-white ${
              activeQuestion === index && "mb-4"
            }`}
          >
            <h2
              className={`${
                activeQuestion === index ? "" : "mb-8"
              } font-semibold`}
              id={`flush-heading${index + 1}`}
            >
              <button
                className={`group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base transition ${
                  activeQuestion === index
                    ? ""
                    : "overflow-anchor:none hover:z-[2] focus:z-[3]"
                } focus:outline-none ${
                  activeQuestion === index
                    ? "text-primary"
                    : "&:not([data-te-collapse-collapsed]):text-primary"
                } ${
                  activeQuestion === index
                    ? "boxShadow:inset_0_-1px_0_rgba(229,231,235)"
                    : "&:not([data-te-collapse-collapsed]):boxShadow:inset_0_-1px_0_rgba(229,231,235)"
                } dark:&:not([data-te-collapse-collapsed]):text-primary-400`}
                type="button"
                data-te-collapse-init
                data-te-target={`#flush-collapse${index + 1}`}
                aria-expanded={activeQuestion === index ? "true" : "false"}
                aria-controls={`flush-collapse${index + 1}`}
                onClick={() => toggleQuestion(index)}
              >
                {question.question}
                <span
                  className={`ml-auto h-10 w-10 shrink-0 text-black rounded-md flex items-center justify-center overflow-hidden ${
                    activeQuestion === index ? "text-primary" : ""
                  }`}
                >
                  {activeQuestion === index ? (
                    <RemoveOutlined />
                  ) : (
                    <AddOutlined />
                  )}
                </span>
              </button>
            </h2>
            <div
              id={`flush-collapse${index + 1}`}
              className={`${
                activeQuestion === index ? "" : "invisible hidden"
              } border-0`}
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby={`flush-heading${index + 1}`}
              data-te-parent="#accordionFlushExample"
            >
              <div className="pb-4 px-5">
                {/* Render JSX answer directly */}
                {typeof question.answer === "string"
                  ? question.answer.split("\n").map((paragraph, i) => (
                      <p key={i} className="mb-4">
                        {paragraph}
                      </p>
                    ))
                  : question.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
