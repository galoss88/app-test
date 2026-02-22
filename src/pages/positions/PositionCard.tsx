import { Card } from "../../components";
import type { IPositionsApi } from "../../types/types";

interface PositionCardProps {
  position: IPositionsApi;
  applyPosition: (params: { jobId: string }) => void;
}

export const PositionCard = ({
  position,
  applyPosition,
}: PositionCardProps) => {
  return (
    <Card
      key={position.id}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(0, 0, 0, 0.146)",
        gap: "10px",
      }}
    >
      <Card.Item.Title title={position.title} />
      <Card.Item.Input
        placeholder="Github repository URL"
        type="text"
      ></Card.Item.Input>
      <Card.Item.Button
        title="Enviar postulación."
        onClick={() => applyPosition({ jobId: position.id })}
      >
        Submit
      </Card.Item.Button>
    </Card>
  );
};
