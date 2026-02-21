import { Button } from "./Button";
import { Input } from "./Input";
import { Title } from "./Title";

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

type CardItemType = typeof CardItem & {
  Input: typeof Input;
  Button: typeof Button;
  Title: typeof Title;
};
Card.Item = CardItem as CardItemType;
Card.Item.Input = Input;
Card.Item.Button = Button;
Card.Item.Title = Title;
