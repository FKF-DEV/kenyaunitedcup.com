// eslint-disable-next-line no-unused-vars
// import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { AddOutlined, RemoveOutlined } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";

const questions = [
  {
    id: 1,
    question: "How are FKF Elections conducted?",
    answer:
      "FKF elections are overseen by an independent Electoral Board whose members are ratified by FKF’s General Assembly. Elections are first conducted at the County level followed by the National level elections and finally Sub-County level elections. FKF elections are governed by the FKF Constitution, the FKF Electoral Code (amended) and guided by the electoral calendar published by the Electoral Board.",
  },
  {
    id: 2,
    question: "Who is eligible to vote in FKF Elections?",
    answer:
      "Only active FKF Members are eligible to vote during FKF elections based on the level of election being contested. Voting at National level elections is open to the 94 delegates who comprise the FKF General Assembly as defined in the FKF Constitution. Delegates sent to represent an FKF Member during elections must belong to the Member they represent either by appointment or election.  \n The FKF Electoral Board is responsible for verifying eligibility of delegates who will be allowed to vote at County and Sub-County level elections and publishing of the voter register prior to the elections.",
  },
  {
    id: 3,
    question:
      "Are there eligibility requirements for candidates seeking election?",
    answer: (
      <>
        The eligibility requirements for all candidates seeking an elective post
        in FKF are set out in the amended FKF Electoral Code which can be
        accessed{" "}
        <HashLink to="/#elections-files" className="text-primary underline">
          here
        </HashLink>
        .
      </>
    ),
  },
  {
    id: 4,
    question:
      "What documents are candidates expected to submit as part of their candidature?",
    answer:
      "In addition to the nomination papers and declarations of support from the required number of delegates, candidates must submit a valid Kenyan ID or passport together with proof of active participation in football as per the requirements of the FKF Electoral Code. Candidates for the positions of President, Vice President must submit a Certificate of good conduct which shall not be older than 6 months together with clearance letters from the Directorate of Criminal Investigation, Ethics and Anti-Corruption Commission, Credit Reference Bureau and a valid Tax Compliance Certificate from KRA.",
  },
  {
    id: 5,
    question: "What is the timeline for appealing electoral results?",
    answer:
      "Appeals against any decision of the Electoral Board must be lodged with the FKF Appeals Committee within 3 days of receipt of the communication or decision being challenged.  An appeal fee of KES 100,000/- shall be paid by any appellant which shall be refunded in the event the appeal is successful.",
  },
  {
    id: 6,
    question: "What are the official FKF Electoral Board contact emails?",
    answer: (
      <>
        You can reach out to the FKF Electoral Board through the following
        emails:
        <ul>
          <li>
            <a href="mailto:info@eb.footballkenya.org" className="text-primary">
              info@eb.footballkenya.org
            </a>
          </li>
          <li>
            <a
              href="mailto:appeals@eb.footballkenya.org"
              className="text-primary"
            >
              appeals@eb.footballkenya.org
            </a>
          </li>
          <li>
            <a
              href="mailto:chairman@eb.footballkenya.org"
              className="text-primary"
            >
              chairman@eb.footballkenya.org
            </a>
          </li>
          <li>
            <a
              href="mailto:communications@eb.footballkenya.org"
              className="text-primary"
            >
              communications@eb.footballkenya.org
            </a>
          </li>
        </ul>
      </>
    ),
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
