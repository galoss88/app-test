interface InputProps {
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type = "text", placeholder = "Introducir texto", value, onChange }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ backgroundColor: "blue", padding: "10px", borderRadius: "10px" }}
    />
  );
};
