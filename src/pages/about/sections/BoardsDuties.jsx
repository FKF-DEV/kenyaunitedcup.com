import { boardsDuties } from ".";
import { DutiesCard, Header } from "../../../components";

function BoardsDuties() {
  return (
    <section className="max-w-7xl mx-auto flex items-center flex-col gap-8">
      <div className="flex-center flex-col gap-3 max-w-lg">
        <Header title="The Board's Duties" />

        <h3 className="text-2xl md:text-4xl font-semibold text-center">
          Promoting
          <span className="text-transparent bg-gradient-to-b from-[#004324] via-[#116937] to-[#2AA74B] bg-clip-text">
            {" "}
            Electoral Fair Play{" "}
          </span>
        </h3>

        <p className="mt-4 text-sm font-normal text-center">
          Bound by a strict and comprehensive mandate, we aim to serve and
          protect the electoral process by ensuring open, transparent and fair
          proceeding in each and every election that we oversee. Our duties
          include:
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
