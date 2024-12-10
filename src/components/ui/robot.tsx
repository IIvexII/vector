import { View, Image } from "react-native";
import React from "react";
import { robotImg } from "../../constants/images";
import Text from "./text";

type robotProps = {
  text: string;
};

export default function Robot(pops: robotProps) {
  return (
    <View className="relative">
      <Image
        source={robotImg}
        className="w-[293px] h-[293px] rounded-2xl"
        resizeMode="contain"
      />
      <Text className="absolute top-[70%] left-[33%] text-white text-lg">
        {/* show .. after the 8 characters if text is long*/}
        {pops.text.length > 9 ? pops.text.substring(0, 7) + ".." : pops.text}
      </Text>
    </View>
  );
}
