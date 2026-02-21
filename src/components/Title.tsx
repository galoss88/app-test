interface ITitleProp {
  title?: string;
  props?: React.HTMLAttributes<HTMLHeadingElement>;
}
export const Title = ({ title, ...props }: ITitleProp) => {
  return <h1 {...props}>{title}</h1>;
};
