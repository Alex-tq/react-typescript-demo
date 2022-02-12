import React from "react";

type CutomInputProps = React.ComponentProps<"input">;

export function CustomInput(props: CutomInputProps) {
  return <input {...props} type="text" />;
}
