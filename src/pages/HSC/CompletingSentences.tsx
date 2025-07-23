import BoardQuestion from "../../components/BoardQuestion";
import { completingSentences } from "../../DB/completingSentences";

export default function CompletingSentences() {
  return (
    <BoardQuestion
      data={completingSentences}
      title="Completing Sentences"
      questionTitle="Complete the following sentences with suitable clauses/phrases:"
    />
  );
}
