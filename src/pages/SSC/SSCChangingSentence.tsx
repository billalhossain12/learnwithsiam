import BoardQuestion from "../../components/BoardQuestion";
import { sscChangingSentences } from "../../DB/SSC/sscChangingSentences";

export default function SSCChangingSentence() {
  return (
    <BoardQuestion
      data={sscChangingSentences}
      title="SSC Changing Sentence"
      questionTitle="Change the following sentences as per direction:"
    />
  );
}
