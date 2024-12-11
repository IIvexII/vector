import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

import PrimaryButton from "../../components/ui/primary-button";
import Scene1 from "./scene-1";
import Scene2 from "./scene-2";

import * as Icons from "../../constants/icons";
import { cn } from "../../lib/utils";
import StartGameScreen from "../start-game-screen";

type OnboardingScreenProps = {
  changeScreen: (screen: React.JSX.Element) => void;
};

export default function OnboardingScreen(props: OnboardingScreenProps) {
  const [currentScene, setCurrentScene] = useState(0);

  const scenes = [<Scene1 />, <Scene2 />];

  function startGame() {
    props.changeScreen(<StartGameScreen changeScreen={props.changeScreen} />);
  }

  let renderButton;
  if (currentScene === scenes.length - 1) {
    renderButton = (
      <PrimaryButton className="mt-8 px-6 pt-3 pb-2" onPress={startGame}>
        <Text className="flex-row justify-center items-center">
          Get Started
        </Text>
      </PrimaryButton>
    );
  } else {
    renderButton = (
      <PrimaryButton className="mt-[30px] px-6 pt-3 pb-2" onPress={handleNext}>
        <Text className="flex-row justify-center items-center">
          Next <Image source={Icons.rightArrow} className="h-3 w-6" />
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
      <View className="flex-row justify-center mr-1 mt-10">
        {scenes.map((_, index) => (
          <Pressable
            key={index}
            onPress={navigateToScene.bind(null, index)}
            className="px-2"
          >
            <View
              className={cn(
                "w-5 h-5 rounded-full",
                currentScene === index ? "bg-primary" : "bg-gray-300"
              )}
            ></View>
          </Pressable>
        ))}
      </View>
      {renderButton}
    </View>
  );
}
