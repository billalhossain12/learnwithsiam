import { Link } from "react-router-dom";

export default function SSCContent() {
  return (
    <section>
      <h1 className="font-bold text-[1.5rem] mb-5">SSC Grammer Contents</h1>
      <ul className="space-y-3">
        <li>
          <Link to="/ssc-right-forms-of-verbs">Right Forms Of Verbs</Link>
        </li>
        <li>
          <Link to="/ssc-tag-questions">Tag Questions</Link>
        </li>
        <li>
          <Link to="/ssc-suffix-prefix">Adding Suffix & Prefix</Link>
        </li>
      </ul>
    </section>
  );
}
