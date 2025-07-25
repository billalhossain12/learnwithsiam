import BoardQuestion from "../../components/BoardQuestion";
import { sscCompletingSentences } from "../../DB/SSC/sscCompletingSentences";

export default function CompletingSentence() {
  return (
    <BoardQuestion
      data={sscCompletingSentences}
      title="SSC Completing Sentence"
      questionTitle="Completing sentence"
    />
  );
}
