import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/logo11.svg";
import { NavLink } from "react-router-dom";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  // const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className=" fixed top-0 w-full z-40 bg-purple-950/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink
            to={"/"}
            className="font-mono text-xl font-bold text-white flex gap-3 items-center"
          >
            <img
              src={logo} // Ganti dengan path/logo kamu
              alt="Logo"
              // className="w-8 h-8" // Ukuran logo (responsif dan proporsional)
            />
            TK AN-NISA
          </NavLink>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden "
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to={"/"}
              className="text-white hover:text-stone-400 transition-colors"
            >
              Beranda
            </NavLink>
            <NavLink
              to={"/galeri"}
              className="text-white hover:text-stone-400 transition-colors"
            >
              Galeri
            </NavLink>
            <NavLink
              to={"/pendaftaran"}
              className="text-white hover:text-stone-400 transition-colors"
            >
              Pendaftaran
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
