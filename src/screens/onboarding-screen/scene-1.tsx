import { Image, Text, View } from "react-native";

import InfoBox from "../../components/ui/info-box";

import { robotAndScientistImg } from "../../constants/images";

export default function Scene1() {
  return (
    <View>
      <View className="flex-row justify-center items-center mt-14">
        <Image
          source={robotAndScientistImg}
          className="w-[293px] h-[293px] rounded-2xl"
          resizeMode="contain"
        />
      </View>
      <InfoBox className="mt-[62px]">
        <Text className="text-lg font-[Fira-Mono] text-justify hyphens-auto">
          In the quiet depths of his lab, a scientist, named Dr. Zafeer brought
          his bril- liant idea to life.
          {"\n\n"}
          <Text className="font-bold">VECTOR</Text>, a robot, with his mind
          reading capabilities.
        </Text>
      </InfoBox>
    </View>
  );
}
