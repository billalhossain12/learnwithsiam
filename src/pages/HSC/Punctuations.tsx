import HSCQuestionsString from "../../components/HSCQuestionsString";
import { punctuations } from "../../DB/punctuations";

export default function Punctuations() {
  return (
    <HSCQuestionsString
      data={punctuations}
      title="Punctuations"
      questionTitle="There are fourteen errors in the use of punctuation in the
                  following text. Re-write the text correcting the errors and
                  use capial letters if necessary:"
    />
  );
}
