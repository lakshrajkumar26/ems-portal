import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white text-gray-900 dark:bg-gray-900 border-b dark:text-white border-gray-200 dark:border-gray-800">
        <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <h1 className="flex items-center gap-6">Vaid PR</h1>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/about" className="hover:underline">
              Page
            </Link>
            <ThemeToggle />
          </div>

          <button
            className="sm:hidden p-2 border rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </nav>

        {menuOpen && (
          <div className="sm:hidden flex flex-col gap-2 p-4 bg-gray-100 dark:bg-gray-800 w-full">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
            <Link to="/register" onClick={() => setMenuOpen(false)}>
              Register
            </Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <div className="pt-2 border-t border-gray-300 dark:border-gray-700">
              <ThemeToggle />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
