import HSCQuestions from "../../components/HSCQuestions";
import { prepositions } from "../../DB/prepositions";

export default function Prepositions() {
  return (
    <HSCQuestions
      data={prepositions}
      title="Prepositions"
      questionTitle="Complete the text with suitable prepositions:"
    />
  );
}
