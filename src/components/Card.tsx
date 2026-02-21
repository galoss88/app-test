interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

interface ICardItemProps {
  title: string;
}

export const Card = ({ children, style, ...props }: CardProps) => {
  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

const CardItem = ({ title }: ICardItemProps) => {
  return <div>{title}</div>;
};

Card.Item = CardItem;
