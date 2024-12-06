import { Text } from "react-native";
import React from "react";
import { cn } from "../lib/utils";

type TitleProps = {
  className?: string;
  children: React.ReactNode;
};
export default function Title(props: TitleProps) {
  return (
    <Text
      className={cn(
        "text-orange-200 text-3xl border-4 border-orange-200 p-4 rounded-xl",
        props.className
      )}
    >
      {props.children}
    </Text>
  );
}
