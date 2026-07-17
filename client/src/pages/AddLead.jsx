import { useEffect, useState } from "react";
import { createLead, getLeadById, updateLead } from "../services/leadService";
import { useNavigate, useParams } from "react-router-dom";

function AddLead() {
  const navigate = useNavigate();
const { id } = useParams();

  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    status: "New",
  });

  useEffect(() => {
  if (id) {
    fetchLead();
  }
}, [id]);

const fetchLead = async () => {
  try {
    const data = await getLeadById(id);
    setLead(data);
  } catch (error) {
    console.error(error);
  }
};

  const handleChange = (e) => {
    setLead({
      ...lead,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (id) {
      await updateLead(id, lead);
      alert("Lead Updated Successfully!");
    } else {
      await createLead(lead);
      alert("Lead Added Successfully!");
    }

    navigate("/dashboard");

  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }
};

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Add New Lead
        </h1>

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-2 gap-6">

            <div>
              <label>Name</label>

              <input
                type="text"
                name="name"
                value={lead.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div>
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={lead.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div>
              <label>Phone</label>

              <input
                type="text"
                name="phone"
                value={lead.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div>
              <label>Company</label>

              <input
                type="text"
                name="company"
                value={lead.company}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              />
            </div>

            <div className="col-span-2">

              <label>Status</label>

              <select
                name="status"
                value={lead.status}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              >
                <option>New</option>
                <option>Contacted</option>
                <option>Converted</option>
              </select>

            </div>

          </div>

          <button
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Save Lead
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddLead;