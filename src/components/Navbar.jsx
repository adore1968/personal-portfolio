import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="text-gray-50 px-11 flex items-center justify-between py-6 bg-gray-800">
      <h1 className="md:text-3xl text-2xl font-semibold">
        <Link to="/">Personal Portafolio</Link>
      </h1>
      <ul className="md:text-xl flex gap-5 text-lg text-gray-400">
        <li>
          <Link to="/blog" className="hover:text-gray-50 transition-colors">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/github" className="hover:text-gray-50 transition-colors">
            Github
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
