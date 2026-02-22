import { useState } from "react";
import { Card } from "../../components";
import { useApplyPosition } from "../../hooks/useApplyPosition";
import type { IPositionsApi } from "../../types/types";

interface PositionCardProps {
  position: IPositionsApi;
}

export const PositionCard = ({ position }: PositionCardProps) => {
  const { applyPosition } = useApplyPosition();
  const [repoUrl, setRepoUrl] = useState("");

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
        onChange={(e) => setRepoUrl(e.target.value)}
      ></Card.Item.Input>
      <Card.Item.Button
        title="Enviar postulación."
        type="submit"
        onSubmit={() => applyPosition({ jobId: position.id, repoUrl })}
      >
        Postular
      </Card.Item.Button>
    </Card>
  );
};
