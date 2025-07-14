import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="bg-crimsonDepth shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-semibold text-white">Fleur</div>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-pink-200 transition">Home</Link>
        <Link to="/about" className="text-white hover:text-pink-200 transition">About</Link>
        <Link to="/projects" className="text-white hover:text-pink-200 transition">Projects</Link>
      </div>
    </nav>
  );
}
