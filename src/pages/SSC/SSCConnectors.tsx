import BoardQuestion from "../../components/BoardQuestion";
import { sscConnectors } from "../../DB/SSC/ssConnectors";

export default function SSCConnectors() {
  return (
    <BoardQuestion
      data={sscConnectors}
      title="SSC Connectors"
      questionTitle="Complete the passage using suitable connectors:"
    />
  );
}
