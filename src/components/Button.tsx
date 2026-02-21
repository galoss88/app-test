export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  return (
    <button style={{ ...defaultStyle, ...props.style }} {...props}></button>
  );
};

const defaultStyle: React.CSSProperties = {
  backgroundColor: "#4051B5",
  color: "#FFFFFF",
  borderRadius: "5px",
};
