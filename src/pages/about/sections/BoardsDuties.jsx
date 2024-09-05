import { boardsDuties } from ".";
import { DutiesCard, Header } from "../../../components";

function BoardsDuties() {
  return (
    <section className="max-w-7xl mx-auto flex items-center flex-col gap-8">
      <div className="flex-center flex-col gap-3 max-w-4xl">
        <Header title="The Board's Duties" />

        <h3 className="text-2xl md:text-4xl font-semibold text-center">
          Safeguarding the
          <span className="text-transparent bg-gradient-to-b from-[#004324] via-[#116937] to-[#2AA74B] bg-clip-text">
            {" "}
            Electoral Process{" "}
          </span>
        </h3>

        <p className="mt-4 text-sm font-normal text-center">
          Our mission is to safeguard the democratic process within the Football
          Kenya Federation by ensuring that all elections are free, fair, and
          transparent. We are committed to upholding the highest standards of
          electoral integrity, ensuring that all candidates and voters are
          treated with impartiality and respect throughout the entire process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
        {boardsDuties.map((duty) => (
          <DutiesCard key={duty.id} duty={duty} />
        ))}
      </div>
    </section>
  );
}

export default BoardsDuties;
