import HSCQuestionsString from "../../components/HSCQuestionsString";
import { pronounReferences } from "../../DB/pronounReferences";

export default function PronounReferences() {
  return (
    <HSCQuestionsString data={pronounReferences} title="Pronoun References" questionTitle="Use pronoun references"/>
  )
}