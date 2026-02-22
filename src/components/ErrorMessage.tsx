interface ErrorMessageProps extends React.ComponentPropsWithoutRef<"h2"> {
  message: string;
}

export const ErrorMessage = ({
  message,
  style,
  ...rest
}: ErrorMessageProps) => {
  if (!message) return null;

  return (
    <h2 style={{ ...defaultStyle, ...style }} {...rest}>
      {message}
    </h2>
  );
};

const defaultStyle: React.CSSProperties = {
  color: "#b91c1c",
  fontSize: "0.85rem",
  lineHeight: 1.2,
  fontWeight: 500,
  margin: "4px 0 0 0",
  textAlign: "center",
};
