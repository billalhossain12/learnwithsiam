import HSCQuestions from "../../components/HSCQuestions";
import { completingSentences } from "../../DB/completingSentences";

export default function CompletingSentences() {
  return (
    <HSCQuestions
      data={completingSentences}
      title="Completing Sentences"
      questionTitle="Complete the following sentences with suitable clauses/phrases:"
    />
  );
}
