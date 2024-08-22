import { Articles, ElectionsFiles, FAQs, Hero } from "./section";
import { Border } from "../../components";

function Home() {
  return (
    <main className="bg-gray-100">
      <Hero />
      <Border />
      <ElectionsFiles />
      <Border />
      <Articles />
      <Border />
      <FAQs />
    </main>
  );
}

export default Home;
