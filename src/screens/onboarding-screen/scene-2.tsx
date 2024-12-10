import { Image, View } from "react-native";

import InfoBox from "../../components/ui/info-box";

import Robot from "../../components/ui/robot";
import TextBold from "../../components/ui/text-bold";
import * as Icons from "../../constants/icons";
import Text from "../../components/ui/text";

export default function Scene2() {
  return (
    <View>
      <View className="flex-row justify-center items-center mt-14">
        <Robot text="Hi Human!" />
      </View>
      <InfoBox className="mt-[62px]">
        <Text className="text-lg text-justify hyphens-auto">
          <TextBold>Hi Human!</TextBold> I am Vector. You are here to train me
          to be a mind reader.
        </Text>
        <TextBold className="mt-4">Constraints for Training:</TextBold>

        <View className="flex-row gap-2 mt-3">
          <Image source={Icons.tick} className="w-5 h-5" />
          <Text>The number between 1 to 100</Text>
        </View>

        <View className="flex-row gap-2 mt-3">
          <Image source={Icons.cross} className="w-5 h-5" />
          <Text>No wrong hints or I’ll kill you.</Text>
        </View>
      </InfoBox>
    </View>
  );
}
