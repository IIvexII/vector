import { Text } from "react-native";
import React from "react";
import { cn } from "../../lib/utils";

type TitleProps = {
  className?: string;
  text: string;
};
export default function Title(props: TitleProps) {
  if (!props.text) return null;

  return (
    <Text
      className={cn(
        "text-accent200 text-3xl border-4 border-accent200 p-4 rounded-xl text-center",
        props.className
      )}
    >
      {props.text}
    </Text>
  );
}
