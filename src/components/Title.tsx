interface ITitleProp {
  title?: string;
  props?: React.HTMLAttributes<HTMLHeadingElement>;
}
export const Title = ({ title, ...rest }: ITitleProp) => {
  return (
    <h1 style={{ ...defaultStyle, ...rest.props?.style }} {...rest}>
      {title}
    </h1>
  );
};

const defaultStyle: React.CSSProperties = {
  fontSize: "1.2rem",
};
