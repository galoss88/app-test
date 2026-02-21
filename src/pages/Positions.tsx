import { Card } from "../components/Card";

export const Positions = () => {
  return (
    <Card
      style={{
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 0 1px 1px grey",
      }}
    >
      <Card.Item title="Hello World" />
    </Card>
  );
};
