import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-indigo-500 shadow-lg w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center p-4 max-w-7xl mx-auto gap-4 sm:gap-0 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-bold text-white text-xl hover:text-indigo-200 transition-colors"
        >
          ANIME LIST
        </Link>
        <div className="relative w-full sm:w-auto sm:ml-auto">
          <input
            placeholder="Cari Anime..."
            className="bg-white rounded-full px-6 py-2 w-full sm:w-[300px] focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all shadow-sm"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;