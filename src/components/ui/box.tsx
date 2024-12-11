import { View } from "react-native";
import React from "react";
import { cn } from "../../lib/utils";

type BoxProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Box(props: BoxProps) {
  return (
    <View
      className={cn(
        "bg-primary800 px-8 py-8 rounded-xl elevation-2xl",
        props.className
      )}
    >
      {props.children}
    </View>
  );
}
