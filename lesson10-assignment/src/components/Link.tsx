// TODO: Make this component polymorphic.
// The `as` prop should accept any valid HTML element type (e.g. 'a', 'button', 'span').
// The remaining props should be inferred from the resolved element —
// for example, if as="a" then `href` and `target` should autocomplete,
// if as="button" then `disabled` and `type` should autocomplete.
// Default `as` to 'a' when not provided.
// `variant` should only accept 'default' | 'muted' | 'underline'.

const variantStyles = {
  default: "text-blue-600 hover:text-blue-800",
  muted: "text-gray-500 hover:text-gray-700",
  underline: "text-blue-600 underline underline-offset-2 hover:text-blue-800",
} as const;

type LinkProps<T extends React.ElementType = "a"> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  variant: keyof typeof variantStyles;
} & Omit<React.ComponentProps<T>, "as" | "className" | "children" | "variant">;

function Link<T extends React.ElementType = "a">({
  variant,
  as,
  children,
  className,
  ...props
}: LinkProps<T>) {
  const Component = as || "a";

  return (
    <Component
      className={`inline-flex items-center gap-1 ${variantStyles[variant || "default"]} ${className || ""}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Link };
