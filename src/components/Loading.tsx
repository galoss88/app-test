import { LoadingSpinner } from "./LoadingSpinner";

export const Loading = () => {
  return (
    <div style={stylesContainer}>
      <h1 style={stylesText}>
        <LoadingSpinner />
        Cargando...
      </h1>
    </div>
  );
};

const stylesContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  backgroundColor: "transparent",
};

const stylesText: React.CSSProperties = {
  margin: 0,
  fontSize: "1.5rem",
  color: "#333",
  fontWeight: "500",
};
