import { electoralCompliance, judge, overseeElection, verifyCandidate } from "../../../assets";

export { default as BoardsDuties } from "./BoardsDuties";
export { default as BoardMembers } from "./BoardMembers";
export { default as Hero } from "./Hero";

export const boardsDuties = [
    {
        id:1,
        title: "Overseeing Elections",
        description: "Overseeing FKF election administration and ensuring adherence to the electoral code and FKF-issued rules and guidelines.",
        image: overseeElection,
        rowSpan: true
    },
    {
        id:2,
        title: "Ensuring Electoral Integrity",
        description: "Upholding the FKF constitution and regulations through meticulous application in electoral matters.",
        image: judge,
    },
    {
        id:4,
        title: "Electoral Code Compliance",
        description: "Streamlining the electoral process by providing and ensuring that the step-by-step guidance is adhered to.",
        image: electoralCompliance,
        rowSpan: true
    },
    {
        id:3,
        title: "Verifying Candidate Eligibility",
        description: "Ensuring all FKF candidates meet the set electoral and constitutional standards.",
        image: verifyCandidate,
    },
]