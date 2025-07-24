import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import SparkleOverlay from "../components/background/SparkleOverlay";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/journey", label: "Journey" },
    { path: "/works", label: "Works" },
    { path: "/letters", label: "Letters" },
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
          className="text-white p-2 fixed top-4 right-4 md:top-6 md:right-6 z-[999]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      )}

      {/* Overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-darkGreen/90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 text-white text-2xl z-40 transition-all duration-300 overflow-hidden">
          <SparkleOverlay />
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="relative flex justify-center w-full group"
              >
                {/* Active background glow */}
                {isActive && (
                  <div className="absolute w-[80vw] max-w-[240px] h-10 bg-gradient-to-r from-neonPurple to-neonBlue rounded-tr-lg rounded-tl-lg shadow-md -top-1 z-0 transition-all duration-300" />
                )}
                <span
                  className={`relative z-10 text-xl font-bold tracking-wide px-4 py-2 transition-all duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-white/70 group-hover:text-pink-300"
                  }`}
                  style={{ fontFamily: "'Futuristic Armour', sans-serif" }}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}

          {/* Decorative images */}
          <img
            src="/logo.png"
            alt="Line Decoration"
            className="w-60 sm:w-96 absolute bottom-1 right-4 opacity-20 h-auto pointer-events-none"
          />
          <img
            src="/logo.png"
            alt="Line Decoration Mirror"
            className="w-60 sm:w-96 absolute top-1 left-4 opacity-20 h-auto scale-x-[-1] scale-y-[-1] pointer-events-none"
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
