import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import SparkleOverlay from "../components/SparkleOverlay";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Menutup menu saat pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/journey", label: "Journey" },
    { path: "/works", label: "Works" },
    { path: "/contact", label: "Letters" },
    { path: "/about-page", label: "About" },
  ];

  const linkClass = (path) =>
    `transition duration-300 ${
      location.pathname === path
        ? "font-bold underline underline-offset-4 text-pink-200"
        : "hover:text-pink-200"
    }`;

  return (
    <div className="relative z-50">
      {!isHome && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 focus:outline-none z-[999] fixed top-4 right-4"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      )}

      {/* Overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-darkGreen/90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 text-white text-2xl z-40 transition-all duration-300">
          <SparkleOverlay />
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="relative flex justify-center w-full"
              >
                {isActive && (
                  <div className="absolute w-60 h-10 bg-gradient-to-r from-neonPurple to-neonBlue rounded-tr-lg rounded-tl-lg shadow-md -top-1" />
                )}
                <span
                  className={`relative z-10 text-xl font-bold tracking-wide ${
                    isActive ? "text-white" : "text-white/70"
                  }`}
                  style={{ fontFamily: "'Futuristic Armour', sans-serif" }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
          <img
            src="/logo.png"
            alt="Line Decoration"
            className="absolute bottom-1 right-4 opacity-20 w-96 h-auto"
          />
          <img
            src="/logo.png"
            alt="Line Decoration Mirror"
            className="absolute top-1 left-4 opacity-20 w-96 h-auto scale-x-[-1] scale-y-[-1]"
          />
        </div>
      )}

      {isHome && !isOpen && (
        <div className="relative z-50">
          <Link
            to="/about-page"
            className="text-white hover:text-pink-200 transition text-lg"
          >
            About
          </Link>
        </div>
      )}
    </div>
  );
}
