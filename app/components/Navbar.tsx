
function Navbar() {
  return (
    <>
      <div className="flex justify-between p-4 bg-gray-800 font-poppins">
        <div>
          <a href="/" className="text-2xl font-bold mt-2 text-white">
            sidehunt 🚀
          </a>
        </div>
        <div>
          <a
            className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="/login"
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
