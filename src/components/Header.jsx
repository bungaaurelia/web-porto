import HamburgerMenu from "./HamburgerMenu";

export default function Header() {
  return (
    <nav className="bg-darkGreen shadow-md px-4 sm:px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div
        className="text-2xl text-white"
        style={{
          textShadow: "0 0 5px #d822c6, 0 0 10px #d822c6, 0 0 20px #d822c6",
          fontFamily: "'Dancing Script', cursive",
          fontSize: 30,
        }}
      >
        <a href="/" aria-label="Homepage">
          bunga
        </a>
      </div>

      <HamburgerMenu />
    </nav>
  );
}
