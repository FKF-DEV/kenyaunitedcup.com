/* eslint-disable react/prop-types */
import { cloudDownload } from "../../../assets";
import { Header } from "../../../components";

const electionFiles = [
  {
    id: 1,
    title: "Polling Agents Declaration Form",
    fileType: "Pdf",
    size: "2.5mb",
  },
  {
    id: 2,
    title: "County Elections Preliminary  Results",
    fileType: "Pdf",
    size: "3.0mb",
  },
  {
    id: 3,
    title: "Electoral Rules and Guidelines",
    fileType: "Pdf",
    size: "2.5mb",
  },
  {
    id: 4,
    title: "Final Voter Register",
    fileType: "Pdf",
    size: "2.5mb",
  },
  {
    id: 5,
    title: "FKF Constitution",
    fileType: "Pdf",
    size: "2.5mb",
  },
  {
    id: 6,
    title: "FKF Electoral Code",
    fileType: "Pdf",
    size: "2.5mb",
  },
];

function ElectionsFiles() {
  return (
    <div className="max-w-7xl h-[664px] mx-auto flex-between flex-col md:flex-row">
      <div className="flex-1 h-full flex-center md:flex-start flex-col gap-2.5 pr-12">
        <Header title="Election Files" />
        <h3 className="text-4xl font-semibold text-center md:text-left">
          All you
          <span className="text-transparent bg-gradient-to-b from-[#004324] to-[#116937] bg-clip-text">
            {" "}
            need to know{" "}
          </span>
          about the
          <span className="text-transparent bg-gradient-to-b from-[#004324] via-[#116937] to-[#2AA74B] bg-clip-text">
            {" "}
            electoral process
          </span>
        </h3>

        <p className="mt-4 text-base font-normal text-center md:text-left">
          Documents to get you up to speed on all you need to know about our
          electoral process including regulations, the voter’s register,
          candidates or the final results.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex-1 flex flex-col gap-4 overflow-y-scroll h-full px-2 md:px-0 py-2 scrollbar">
        {electionFiles.map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
}

export default ElectionsFiles;

const FileCard = ({ file }) => {
  const { title, fileType, size } = file;
  return (
    <div className="w-full bg-white rounded-xl p-6 flex flex-col">
      <div className="flex-between">
        <h5 className="text-base font-semibold">{title}</h5>
        <button type="button" className="size-8">
          <img
            src={cloudDownload}
            alt="cloud-download"
            className="size-full object-contain"
          />
        </button>
      </div>

      <p className="uppercase text-sm font-normal text-[#475467]">
        {fileType} • {size}
      </p>
    </div>
  );
};
