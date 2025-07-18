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
          <Link to="/prepositions">Prepositions</Link>
        </li>
        <li>
          <Link to="/completing-sentences">Completing Sentences</Link>
        </li>
        <li>
          <Link to="/modifiers">Modifiers</Link>
        </li>
        <li>
          <Link to="/right-form-of-verbs">Right Form Of Verbs</Link>
        </li>
        <li>
          <Link to="/connectors">Connectors</Link>
        </li>
      </ul>
    </section>
  );
}
