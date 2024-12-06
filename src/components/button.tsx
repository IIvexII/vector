import React from "react";
import { Text, Pressable, View } from "react-native";
import COLORS from "../constants/colors";

type ButtonProps = {
  children?: React.ReactNode;
  onPress?: () => void;
};

export function Button(props: ButtonProps) {
  return (
    <View className="rounded-xl overflow-hidden">
      <Pressable
        className="bg-primary200 px-8 py-2 active:opacity-70"
        android_ripple={{ color: COLORS.accent200 }}
        onPress={props.onPress}
      >
        <Text className="text-white">{props.children}</Text>
      </Pressable>
    </View>
  );
}
