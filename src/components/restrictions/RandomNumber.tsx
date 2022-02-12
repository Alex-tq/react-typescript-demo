import { type } from "os";
import React from "react";

type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isZero?: never;
  isPositive?: never;
};

type Zero = RandomNumberType & {
  isZero: boolean;
  isNegative?: never;
  isPositive?: never;
};
type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

export function RandomNumber({
  value,
  isNegative,
  isPositive,
  isZero,
}: RandomNumberProps) {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
}
