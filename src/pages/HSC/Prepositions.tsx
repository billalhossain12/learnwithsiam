import BoardQuestion from "../../components/BoardQuestion";
import { prepositions } from "../../DB/prepositions";

export default function Prepositions() {
  return (
    <BoardQuestion
      data={prepositions}
      title="Prepositions"
      questionTitle="Complete the text with suitable prepositions:"
    />
  );
}
