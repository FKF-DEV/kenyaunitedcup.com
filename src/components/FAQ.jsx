import { AddOutlined, RemoveOutlined } from "@mui/icons-material";

// eslint-disable-next-line no-unused-vars
// import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "Who can participate in FKF elections?",
    answer:
      "Elections are open to candidates for positions at the National, County, and Sub-County levels, provided they meet the eligibility criteria.",
  },
  {
    id: 2,
    question:
      "What are the eligibility requirements for the FKF President and Deputy President?",
    answer:
      "Candidates must be Kenyan  citizens, have been active in  football for three of the last  four years, and meet other  criteria like having a clean  criminal record and clearance  from various authorities.",
  },
  {
    id: 3,
    question: "What documents are required to submit a candidature?",
    answer:
      "Candidates must submit a valid  Kenyan ID or passport, a  certificate of good conduct,  and other clearances such as  from the Credit Reference  Bureau and the Kenya Revenue  Authority.",
  },
  {
    id: 4,
    question: "How is voting conducted in FKF elections?",
    answer:
      "Voting is conducted by secret ballot, and the results are counted and declared in the presence of all delegates.",
  },
  {
    id: 5,
    question: "What is the timeline for appealing election results?",
    answer:
      "Appeals against election  results must be lodged within  three days of the  announcement.",
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
