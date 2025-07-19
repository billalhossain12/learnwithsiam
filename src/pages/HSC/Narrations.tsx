import HSCQuestionsString from "../../components/HSCQuestionsString";
import { narrations } from "../../DB/narrations";

export default function Narrations() {
  return (
    <HSCQuestionsString
      data={narrations}
      title="Narrations"
      questionTitle="Use of narration"
    />
  );
}
