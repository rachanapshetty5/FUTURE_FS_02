import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import AddLead from "./pages/AddLead";
import EditLead from "./pages/EditLead";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leads" element={<Leads />} />
      <Route path="/add-lead" element={<AddLead />} />
      <Route path="/edit-lead/:id" element={<EditLead />} />
    </Routes>
  );
}

export default App;