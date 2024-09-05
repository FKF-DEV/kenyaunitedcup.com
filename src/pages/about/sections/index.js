import {
  electoralCompliance,
  judge,
  overseeElection,
  verifyCandidate,
} from "../../../assets";

export { default as BoardsDuties } from "./BoardsDuties";
export { default as BoardMembers } from "./BoardMembers";
export { default as Hero } from "./Hero";

export const boardsDuties = [
  {
    id: 1,
    title: "Overseeing Elections",
    description:
      "We oversee the administration and conduct of elections at the National, County, and Sub-County levels, ensuring compliance with the FKF Constitution and Electoral Code.",
    image: overseeElection,
    rowSpan: true,
  },
  {
    id: 2,
    title: "Ensuring Candidate Eligibility",
    description:
      "Ensuring all FKF candidates meet the set electoral and constitutional standards.",
    image: verifyCandidate,
  },
  {
    id: 4,
    title: "Managing the Electoral Process",
    description:
      " We guarantee that voting is conducted in a transparent and secure manner, with all results accurately counted and declared.",
    image: electoralCompliance,
    rowSpan: true,
  },
  {
    id: 3,
    title: "Handling Appeals",
    description:
      "We serve as the first point of contact for any disputes or appeals related to the electoral process, ensuring that all grievances are addressed promptly and fairly.",
    image: judge,
  },
];
