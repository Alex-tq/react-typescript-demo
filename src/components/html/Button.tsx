import React from "react";

type CustomButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export function CustomButton({
  variant,
  children,
  ...rest
}: CustomButtonProps) {
  return (
    <button {...rest} className={`class-with-${variant}`}>
      {children}
    </button>
  );
}
