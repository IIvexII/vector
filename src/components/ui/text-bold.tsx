import { Text } from "react-native";
import React from "react";
import { cn } from "../../lib/utils";

type TextBoldProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function TextBold(props: TextBoldProps) {
  return (
    <Text className={cn("font-bold", props.className)}>{props.children}</Text>
  );
}
