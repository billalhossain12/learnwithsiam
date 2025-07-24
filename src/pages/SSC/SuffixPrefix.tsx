import BoardQuestion from "../../components/BoardQuestion";
import { suffixPrefix } from "../../DB/SSC/suffixPrefix";

export default function SuffixPrefix() {
  return (
    <BoardQuestion
      data={suffixPrefix}
      title="Suffix & Prefix"
      questionTitle="Adding suffix and prefix"
    />
  );
}
