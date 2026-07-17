import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-blue-700 text-white">

      <h1 className="text-3xl font-bold p-6 border-b border-blue-500">
        Mini CRM
      </h1>

      <nav className="mt-6">

        <Link
          to="/dashboard"
          className="block px-6 py-3 hover:bg-blue-800"
        >
          Dashboard
        </Link>

        <Link
          to="/leads"
          className="block px-6 py-3 hover:bg-blue-800"
        >
          Leads
        </Link>

        <Link
          to="/add-lead"
          className="block px-6 py-3 hover:bg-blue-800"
        >
          Add Lead
        </Link>

        <button
          className="w-full text-left px-6 py-3 hover:bg-red-600 mt-10"
        >
          Logout
        </button>

      </nav>

    </div>
  );
}

export default Sidebar;