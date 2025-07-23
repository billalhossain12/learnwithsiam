import BoardQuestion from "../../components/BoardQuestion";
import { connectors } from "../../DB/connectors";

export default function Connectors() {
  return (
    <BoardQuestion
      data={connectors}
      title="Connectors"
      questionTitle="Use appropriate sentence connectors in the blank spaces of the following pessage:"
    />
  );
}
