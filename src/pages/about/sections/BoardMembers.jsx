import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../../../components";

function BoardMembers() {
  const [members, setMembers] = useState([]);
  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/members/`);
        setMembers(response.data); // Assuming response.data is an array of members
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, [BASE_URL]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <Header title="Board Members" />
      <h3 className="text-3xl font-semibold text-center mb-6">
        Meet Our{" "}
        <span className="text-transparent bg-gradient-to-r from-green-600 to-green-800 bg-clip-text">
          Board Members
        </span>
      </h3>

      {/* Horizontal Scrollable Member Cards */}
      <div className="w-full overflow-x-scroll py-2">
        <div className="flex gap-6">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}

const MemberCard = ({ member }) => {
  const { name, email, image, title } = member;

  return (
    <div className="min-w-[200px] bg-white shadow-lg rounded-lg p-6 text-center">
      {/* Member Image */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
      />

      {/* Member Name and Details */}
      <h4 className="text-xl font-bold">{name}</h4>
      <p className="text-sm font-medium text-green-600">{title}</p>
      <p className="text-sm text-gray-500">{email}</p>
    </div>
  );
};

export default BoardMembers;
