export const SuccessMessage = ({ message }: { message: string }) => {
  if (!message) return null;

  return <p style={successStyle}>{message}</p>;
};

const successStyle: React.CSSProperties = {
  color: "#15803d",
  backgroundColor: "#f0fdf4",
  fontSize: "0.85rem",
  lineHeight: 1.2,
  fontWeight: 500,
  margin: "8px 0 0 0",
  padding: "8px",
  borderRadius: "6px",
  textAlign: "center",
  border: "1px solid #dcfce7",
};
