import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "w-full rounded-xl py-4 text-lg font-semibold tracking-[0.35em] transition",
        "focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-blue-950",
        variant === "primary" && "bg-pink-500/80 text-white hover:bg-pink-500",
        variant === "secondary" &&
          "bg-transparent text-white border border-white/25 hover:border-white/40",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
