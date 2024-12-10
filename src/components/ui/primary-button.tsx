import React from "react";
import { Text, Pressable, View } from "react-native";
import COLORS from "../../constants/colors";
import { cn } from "../../lib/utils";

type PrimaryButtonProps = {
  children?: React.ReactNode;
  className?: string;
  textClassName?: string;
  onPress?: () => void;
};

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <View
      className={cn(
        "rounded-full overflow-hidden self-center",
        props.className
      )}
    >
      <Pressable
        className="bg-primary px-8 py-2 active:opacity-70"
        android_ripple={{ color: COLORS.primary }}
        onPress={props.onPress}
      >
        <Text className={cn("text-white text-xl", props.textClassName)}>
          {props.children}
        </Text>
      </Pressable>
    </View>
  );
}
