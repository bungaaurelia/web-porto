import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="bg-darkGreen shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl text-white" 
        style={{ textShadow: "0 0 5px #d822c6, 0 0 10px #d822c6, 0 0 20px #d822c6", fontFamily: "MoonTime", fontSize: 50 }}>fleur</div>
      <div className="space-x-4">
        <Link to="/about-page" className="text-white hover:text-pink-200 transition">About</Link>
      </div>
    </nav>
  );
}
