import { Image, Pressable, Text, View } from "react-native";
import Scene1 from "./scene-1";
import PrimaryButton from "../../components/ui/primary-button";
import * as Icons from "../../constants/icons";
import Scene2 from "./scene-2";
import { useState } from "react";

export default function OnboardingScreen() {
  const [currentScene, setCurrentScene] = useState(0);

  const scenes = [<Scene1 />, <Scene2 />];

  let renderButton;
  if (currentScene === scenes.length - 1) {
    renderButton = (
      <PrimaryButton className="mt-8">
        <Text className="flex-row justify-center items-center">
          Get Started
        </Text>
      </PrimaryButton>
    );
  } else {
    renderButton = (
      <PrimaryButton className="mt-8" onPress={handleNext}>
        <Text className="flex-row justify-center items-center">
          Next{"  "} <Image source={Icons.rightArrow} className="h-3 w-8" />
        </Text>
      </PrimaryButton>
    );
  }

  function handleNext() {
    setCurrentScene((prev) => prev + 1);
  }

  function navigateToScene(index: number) {
    setCurrentScene(index);
  }

  return (
    <View className="pl-[41px] pr-[40px]">
      {scenes[currentScene]}

      {/* Navigatable dots */}
      <View className="flex-row justify-center gap-2 mr-1 mt-16">
        {scenes.map((_, index) => (
          <Pressable key={index} onPress={navigateToScene.bind(null, index)}>
            <View
              className={`w-5 h-5 rounded-full ${
                currentScene === index ? "bg-primary" : "bg-gray-300"
              }`}
            ></View>
          </Pressable>
        ))}

        {/* <View className="w-5 h-5 rounded-full bg-gray-300"></View> */}
      </View>
      {renderButton}
    </View>
  );
}
