import React from "react";
import { Text as DefaultText } from "react-native";
import { cn } from "../../lib/utils";

type TextProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Text(props: TextProps) {
  return (
    <DefaultText className={cn("font-[Fira-Mono]", props.className)}>
      {props.children}
    </DefaultText>
  );
}
