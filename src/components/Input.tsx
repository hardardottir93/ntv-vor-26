type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email";
};

export const Input = ({ value, onChange, type = "text" }: Props) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e);
  }
  return (
    <input
      value={value}
      onChange={(e) => handleChange(e)}
      type={type}
      placeholder="enter value.."
    />
  );
};
