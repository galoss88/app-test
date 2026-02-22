import { useState } from "react";
import { Card } from "../../components";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useApplyPosition } from "../../hooks/useApplyPosition";
import type { IPositionsApi } from "../../types/types";

interface PositionCardProps {
  position: IPositionsApi;
}

export const PositionCard = ({ position }: PositionCardProps) => {
  const { applyPosition, loading, error } = useApplyPosition();
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
      {error && <ErrorMessage message={error} />}
      <Card.Item.Button
        title="Enviar postulación."
        type="submit"
        onClick={() => applyPosition({ jobId: position.id, repoUrl })}
        disabled={loading}
      >
        Postular
      </Card.Item.Button>
    </Card>
  );
};
