import React from "react";
import { Text, Pressable, View } from "react-native";
import { cn } from "../../lib/utils";

type PrimaryButtonProps = {
  children?: React.ReactNode;
  className?: string;
  textClassName?: string;
  onPress?: () => void;
};

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <View className="overflow-hidden rounded-full">
      <Pressable
        className={cn(
          " self-center bg-primary h px-8 py-2 active:opacity-80 rounded-full",
          props.className
        )}
        onPress={props.onPress}
      >
        <Text
          className={cn(
            "text-white text-xl font-[Fira-Mono]",
            props.textClassName
          )}
        >
          {props.children}
        </Text>
      </Pressable>
    </View>
  );
}
