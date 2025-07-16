import { Link } from "react-router-dom";

export default function HSCContent() {
  return (
    <section>
      <h1 className="font-bold text-[1.5rem] mb-5">HSC Grammer Contents</h1>
      <ul className="space-y-3">
        <li>
          <Link to="/special-phrases">Special Phrases</Link>
        </li>
        <li>
          <Link to="/right-form-of-verb">Right Form of Verb</Link>
        </li>
      </ul>
    </section>
  );
}
