import { Card } from "../components";
import { useGetPositions } from "../hooks/useGetPositions";
import type { IPositionsApi } from "../types/types";

export const Positions = () => {
  const { positions, loading, error } = useGetPositions();
  return (
    <div>
      {positions &&
        positions.length > 0 &&
        positions?.map((position: IPositionsApi) => (
          <Card
            key={position.id}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 0 1px 1px grey",
              gap: "10px",
            }}
          >
            <Card.Item title={position.title} />
            <Card.Item.Input type="text"></Card.Item.Input>
            <Card.Item.Button title="Enviar postulación.">
              Submit
            </Card.Item.Button>
          </Card>
        ))}
    </div>
  );
};
