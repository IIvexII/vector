import { View, Image } from "react-native";
import React from "react";
import { robotImg } from "../../constants/images";
import Text from "./text";
import { cn } from "../../lib/utils";

type robotProps = {
  text?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Robot(props: robotProps) {
  // conditionally render the robot screen text or react jsx passed to it.
  let renderRobotScreen: React.ReactNode = null;
  if (props.text) {
    renderRobotScreen = (
      <View className="items-center justify-center w-full h-full">
        <Text className="text-center text-green-300">
          {props.text.length > 9
            ? props.text.substring(0, 7) + "..."
            : props.text}
        </Text>
      </View>
    );
  } else {
    renderRobotScreen = props.children;
  }

  return (
    <View className="relative">
      <Image
        source={robotImg}
        className="w-[293px] h-[293px] rounded-2xl"
        resizeMode="contain"
      />
      <View
        className={cn(
          "absolute top-[65%] left-[32%] w-28 h-16",
          props.className
        )}
      >
        {renderRobotScreen}
      </View>
      {/* <Text
        className={cn(
          "absolute top-[70%] left-[33%] text-green-300 text-lg w-28 text-center",
          props.className
        )}
      >
        {props.text.length > 9 ? props.text.substring(0, 7) + ".." : props.text}
      </Text> */}
    </View>
  );
}
