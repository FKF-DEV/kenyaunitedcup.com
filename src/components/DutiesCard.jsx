/* eslint-disable react/prop-types */
const DutiesCard = ({ duty }) => {
  return (
    <div
      className={`bg-white border p-1.5 rounded-3xl max-w-96 ${
        duty.rowSpan ? "row-span-2" : "row-span-1"
      }`}
    >
      <div
        className={`bg-gray-100 rounded-2xl px-3 md:px-4 py-8 flex items-start justify-center flex-col gap-2.5 h-full`}
      >
        <h4 className="text-primary text-xl md:text-2xl font-semibold">
          {duty.title}
        </h4>

        <p className="text-sm font-normal">{duty.description}</p>

        <img
          src={duty.image}
          alt={duty.title}
          className="size-48 object-cover"
        />
      </div>
    </div>
  );
};

export default DutiesCard;
