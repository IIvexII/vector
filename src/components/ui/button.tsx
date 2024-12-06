import React from "react";
import { Text, Pressable, View } from "react-native";
import COLORS from "../../constants/colors";
import { cn } from "../../lib/utils";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  textClassName?: string;
  onPress?: () => void;
};

export function Button(props: ButtonProps) {
  return (
    <View className={cn("rounded-xl overflow-hidden", props.className)}>
      <Pressable
        className="bg-primary200 px-8 py-2 active:opacity-70"
        android_ripple={{ color: COLORS.accent200 }}
        onPress={props.onPress}
      >
        <Text className={cn("text-white", props.textClassName)}>
          {props.children}
        </Text>
      </Pressable>
    </View>
  );
}
