import React from "react";
import { Text, Pressable, View } from "react-native";

type ButtonProps = {
  children?: React.ReactNode;
  onPress?: () => void;
};

export function Button(props: ButtonProps) {
  return (
    <View className="rounded-xl overflow-hidden">
      <Pressable
        className="bg-pink-700 px-8 py-2 active:opacity-50"
        android_ripple={{ color: "#d21b67" }}
        onPress={props.onPress}
      >
        <Text className="text-white">{props.children}</Text>
      </Pressable>
    </View>
  );
}
