interface CardProps {
  children: React.ReactNode;
}

interface ICardItemProps {
  title: string;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
};


const CardItem = ({ title }: ICardItemProps) => {
  return <div>{title}</div>;
};

Card.Item = CardItem;