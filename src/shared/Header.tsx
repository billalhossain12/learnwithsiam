import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-200 p-5">
      <nav>
        <ul className="flex justify-end gap-10 items-center">
          <li>
            <Link to="hsc-content">HSC</Link>
          </li>
          <li>
            <Link to="ssc-content">SSC</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
