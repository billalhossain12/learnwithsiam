import HSCQuestions from "../../components/HSCQuestions";
import { specialPhrasesData } from "../../DB/specialPhrases";

export default function SpecialPhrases() {
  return (
    <HSCQuestions
      data={specialPhrasesData}
      title="Special Phrases"
      questionTitle="Complete the sentences with suitable words or phrases given in the box:"
    />
  );
}
