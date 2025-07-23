import BoardQuestion from "../../components/BoardQuestion";
import { modifiers } from "../../DB/modifiers";

export default function Modifiers() {
  return (
    <BoardQuestion
      data={modifiers}
      title="Modifiers"
      questionTitle="Read the following text and use modifiers as directed in the
                  blank spaces."
    />
  );
}
