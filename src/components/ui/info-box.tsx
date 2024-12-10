import { View, Text } from "react-native";
import React from "react";
import { cn } from "../../lib/utils";

type InfoBoxProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function InfoBox(props: InfoBoxProps) {
  return (
    <View
      className={cn(
        "bg-seconday px-6 py-8 border border-primary",
        props.className
      )}
    >
      {props.children}
    </View>
  );
}
