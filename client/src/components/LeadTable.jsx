import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLeads, deleteLead } from "../services/leadService";

function LeadTable() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const data = await getLeads();
      setLeads(data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    }
  };
  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this lead?"
  );

  if (!confirmDelete) return;

  try {
    await deleteLead(id);

    alert("Lead deleted successfully!");

    fetchLeads();
  } catch (error) {
    console.error(error);

    alert("Failed to delete lead.");
  }
};

  return (
    <div className="bg-white rounded-xl shadow mt-8 overflow-hidden">
      <h2 className="text-xl font-bold p-6">
        Recent Leads
      </h2>

      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Company</th>
            <th className="text-left p-4">Status</th>
            <th className="text-center p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead._id}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-4">{lead.name}</td>

              <td className="p-4">{lead.company}</td>

              <td className="p-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {lead.status}
                </span>
              </td>

              <td className="p-4 text-center">
               <Link
  to={`/edit-lead/${lead._id}`}
  className="bg-yellow-400 px-4 py-1 rounded mr-2 hover:bg-yellow-500 inline-block"
>
  Edit
</Link>

               <button
  onClick={() => handleDelete(lead._id)}
  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
>
  Delete
</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadTable;