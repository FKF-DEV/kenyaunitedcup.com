import { Border } from "../../components";
import { BoardMembers, BoardsDuties, Hero } from "./sections";

const About = () => {
  return (
    <main className="bg-gray-100">
      <Hero />
      <Border />
      <BoardsDuties />
      <Border />
      <BoardMembers />
    </main>
  );
};

export default About;
