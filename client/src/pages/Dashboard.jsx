import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import LeadTable from "../components/LeadTable";
import { getLeads } from "../services/leadService";

function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
  fetchLeads();
}, []);

const fetchLeads = async () => {
  try {
    const data = await getLeads();
    setLeads(data);
  } catch (error) {
    console.error(error);
  }
};
const totalLeads = leads.length;

const newLeads = leads.filter(
  (lead) => lead.status === "New"
).length;

const convertedLeads = leads.filter(
  (lead) => lead.status === "Converted"
).length;

const pendingLeads = leads.filter(
  (lead) => lead.status === "Pending"
).length;
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <div className="grid grid-cols-4 gap-6">

            <StatsCard
              title="Total Leads"
              value={totalLeads}
              />
            

            <StatsCard
              title="New Leads"
              value={newLeads}
            />

            <StatsCard
              title="Converted"
              value={convertedLeads}
            />

            <StatsCard
              title="Pending"
              value={pendingLeads}
            />
           

          </div>

        </div>

      </div>
       <LeadTable />

    </div>
  );
}

export default Dashboard;