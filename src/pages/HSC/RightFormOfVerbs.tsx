import BoardQuestion from "../../components/BoardQuestion";
import { rightFormOfVerbs } from "../../DB/rightFormOfVerbs";

export default function RightFormOfVerbs() {
  return (
    <BoardQuestion
      data={rightFormOfVerbs}
      title="Right Form Of Verbs"
      questionTitle="Read the text and fill in the gaps with correct forms of verbs as per subject and context:"
    />
  );
}
