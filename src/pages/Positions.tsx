import { Loading } from "../components/Loading";
import { useApplyPosition } from "../hooks/useApplyPosition";
import { useGetPositions } from "../hooks/useGetPositions";
import type { IPositionsApi } from "../types/types";
import { PositionCard } from "./positions/PositionCard";

export const Positions = () => {
  const { positions, loading, error } = useGetPositions();
  const { applyPosition } = useApplyPosition();

  if (loading) return <Loading />;
  if (error) return <h1>{error}</h1>;

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
          <PositionCard
            key={position.id}
            position={position}
            applyPosition={applyPosition}
          />
        ))}
    </div>
  );
};
