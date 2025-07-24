import BoardQuestion from "../../components/BoardQuestion";
import { suffixPrefix } from "../../DB/SSC/suffixPrefix";

export default function SuffixPrefix() {
  return (
    <BoardQuestion
      data={suffixPrefix}
      title="Suffix & Prefix"
      questionTitle="Complete the text adding prefixes, suffixes, or both to the root words given in the parenthesis."
    />
  );
}
