import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ data }) {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-sky-400 font-semibold"
      : "text-slate-300 hover:text-white transition";

  // Split name into first + last
  const [firstName, lastName] = data.name.split(" ");

  return (
    <header className="sticky top-4 z-50 border border-white/10 bg-[#07111f]/80 backdrop-blur-xl rounded-2xl mx-4 mt-4">
      
      <div className="section-container relative flex items-center justify-center py-6">
        
        {/* LEFT - NAME */}
        <Link
          to="/"
          className="absolute left-0 text-lg font-bold tracking-wide"
        >
          <span className="text-white">{firstName}</span>{" "}
          <span className="text-sky-400">{lastName}</span>
        </Link>

        {/* CENTER - NAV LINKS */}
        <nav className="hidden md:flex items-center gap-10 text-lg font-medium">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="absolute right-0 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="md:hidden mt-6 mx-3 rounded-2xl border border-white/10 bg-[#0b1728] shadow-lg pt-2"
          >
            <div className="section-container flex flex-col items-center gap-4 py-4 text-lg">
              <NavLink to="/" onClick={() => setOpen(false)}>
                Home
              </NavLink>

              <NavLink to="/about" onClick={() => setOpen(false)}>
                About
              </NavLink>

              <NavLink to="/projects" onClick={() => setOpen(false)}>
                Projects
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}