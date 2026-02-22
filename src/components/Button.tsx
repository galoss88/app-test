export const Button = ({
  style,
  disabled,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const buttonStyle: React.CSSProperties = {
    ...defaultStyle,
    ...(disabled && disabledStyle),
    ...style,
  };

  return <button style={buttonStyle} disabled={disabled} {...props} />;
};

const defaultStyle: React.CSSProperties = {
  backgroundColor: "#4051B5",
  color: "#FFFFFF",
  borderRadius: "5px",
};

const disabledStyle: React.CSSProperties = {
  opacity: 0.6,
  cursor: "not-allowed",
  pointerEvents: "none",
};
