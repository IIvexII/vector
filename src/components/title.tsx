import { Text } from "react-native";
import React from "react";
import { cn } from "../lib/utils";

type TitleProps = {
  className?: string;
  children: string;
};
export default function Title(props: TitleProps) {
  return (
    <Text
      className={cn(
        "text-accent200 text-3xl border-4 border-accent200 p-4 rounded-xl",
        props.className
      )}
    >
      {props.children}
    </Text>
  );
}
