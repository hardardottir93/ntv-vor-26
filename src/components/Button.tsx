type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value?: string;
};

export function Button({ value = "Submit", ...props }: ButtonProps) {
  return <button {...props}>{value}</button>;
}
