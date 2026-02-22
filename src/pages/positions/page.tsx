import { Loading } from "../../components/Loading";
import { useGetPositions } from "../../hooks/useGetPositions";
import type { IPositionsApi } from "../../types/types";
import { PositionCard } from "./PositionCard";

export const PositionsPage = () => {
  const { positions, loading, error } = useGetPositions();

  if (loading) return <Loading />;
  if (error) return <h1>{error}</h1>;

  return (
    <div style={stylesContainer}>
      {positions &&
        positions.length > 0 &&
        positions?.map((position: IPositionsApi) => (
          <PositionCard key={position.id} position={position} />
        ))}
    </div>
  );
};

const stylesContainer: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  gap: "2rem",
  padding: "2rem",
};
