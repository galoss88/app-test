import { Card } from "../components";
import { Loading } from "../components/Loading";
import { useApplyPosition } from "../hooks/useApplyPosition";
import { useGetPositions } from "../hooks/useGetPositions";
import type { IPositionsApi } from "../types/types";

export const Positions = () => {
  const { positions, loading, error } = useGetPositions();
  const { applyPosition } = useApplyPosition();
  
  if (loading) return <Loading />;
  if (error) return <h1>Ocurrio un error al cargar las posiciones.</h1>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      {positions &&
        positions.length > 0 &&
        positions?.map((position: IPositionsApi) => (
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
        ))}
    </div>
  );
};
