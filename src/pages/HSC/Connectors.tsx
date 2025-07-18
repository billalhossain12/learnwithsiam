import HSCQuestions from "../../components/HSCQuestions";
import { connectors } from "../../DB/connectors";

export default function Connectors() {
  return (
    <HSCQuestions
      data={connectors}
      title="Connectors"
      questionTitle="Use appropriate sentence connectors in the blank spaces of the following pessage:"
    />
  );
}
