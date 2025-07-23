import BoardQuestion from "../../components/BoardQuestion";
import { sscTagQuestions } from "../../DB/SSC/sscTagQuestions";

export default function TagQuestions() {
  return (
    <BoardQuestion
      data={sscTagQuestions}
      title="Tag Questions"
      questionTitle="Add tag questions to the statements below:"
    />
  );
}
