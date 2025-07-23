import BoardQuestion from "../../components/BoardQuestion";
import { sscRightFormsOfVerbs } from "../../DB/SSC/sscRightFormsOfVerbs";

export default function SSCRightFormsOfVerbs() {
  return (
    <BoardQuestion
      data={sscRightFormsOfVerbs}
      title="Right forms of verbs"
      questionTitle="Complete the following text with right forms of the verbs given in the box:"
    />
  );
}
