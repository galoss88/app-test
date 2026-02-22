import { LoadingSpinner } from "./LoadingSpinner";

interface LoadingProps extends React.ComponentPropsWithoutRef<"div"> {
  fullPage?: boolean;
  showSpinner?: boolean;
  message?: string;
}

const DEFAULT_MESSAGE = "Cargando...";

export const Loading = ({
  fullPage = false,
  showSpinner = false,
  message = DEFAULT_MESSAGE,
  style,
  ...rest
}: LoadingProps) => {
  const containerStyle = fullPage ? { ...stylesFullPage, ...style } : style;

  return (
    <div style={containerStyle} {...rest}>
      <h1 style={stylesText}>
        {showSpinner && <LoadingSpinner />}
        {message}
      </h1>
    </div>
  );
};

const stylesFullPage: React.CSSProperties = {
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
  fontWeight: 500,
};
