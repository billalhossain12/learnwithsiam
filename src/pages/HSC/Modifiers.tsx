import HSCQuestions from "../../components/HSCQuestions";
import { modifiers } from "../../DB/modifiers";

export default function Modifiers() {
  return (
    <HSCQuestions
      data={modifiers}
      title="Modifiers"
      questionTitle="Read the following text and use modifiers as directed in the
                  blank spaces."
    />
  );
}
