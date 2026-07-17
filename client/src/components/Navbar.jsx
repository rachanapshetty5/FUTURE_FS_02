function Navbar() {
  return (
    <div className="bg-white shadow flex justify-between items-center px-8 py-4">

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">

        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">

          A

        </div>

        <p className="font-semibold">
          Admin
        </p>

      </div>

    </div>
  );
}

export default Navbar;