import { useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import Robot from "../components/ui/robot";
import InfoBox from "../components/ui/info-box";
import TextBold from "../components/ui/text-bold";
import PrimaryButton from "../components/ui/primary-button";
import Text from "../components/ui/text";

import { gnRandomNum } from "../lib/utils";
import GameOverScreen from "./game-over-screen";

type GameScreenProps = {
  userChoice: number;
  changeScreen: (screen: React.JSX.Element) => void;
};

let minNumber = 1;
let maxNumber = 100;

export default function GameScreen(props: GameScreenProps) {
  const [currentGuess, setCurrentGuess] = useState<number>(
    gnRandomNum(minNumber, maxNumber)
  );
  const [guesses, setGuesses] = useState<number[]>([]);

  /**
   * handle the hint giving mechanism to the machine.
   */
  function hintHandler(direction: "lower" | "greater") {
    // validate the user hint
    if (
      (direction == "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      return Alert.alert("Don't lie humen!", "You know its wrong...");
    }

    if (direction === "lower") {
      maxNumber = currentGuess;
      setCurrentGuess(gnRandomNum(minNumber, maxNumber, currentGuess));
    } else if (direction === "greater") {
      minNumber = currentGuess;
      setCurrentGuess(gnRandomNum(minNumber, maxNumber, currentGuess));
    }
  }

  // check if the machine has guessed it correctly
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      // change screen to game over screen
      props.changeScreen(<GameOverScreen changeScreen={props.changeScreen} />);
    }

    // add the current guess to the guesses list
    setGuesses((prev) => [currentGuess, ...prev]);
  }, [currentGuess]);

  return (
    <View>
      <View className="flex-row justify-center items-center mt-14">
        <Robot>
          <View className="overflow-hidden py-1">
            <Text className="text-green-300 text-center text-xs">
              Prediction
            </Text>
            <TextBold className="text-green-300 text-center text-2xl">
              {currentGuess}
            </TextBold>
          </View>
        </Robot>
      </View>
      <View className="mt-[54px] mx-[40px]">
        <InfoBox className="gap-2 py-6">
          <TextBold className="text-center">
            Give me hint: Lower or Higer?
          </TextBold>
          <View className="flex-row items-center justify-center gap-6 mt-4">
            <PrimaryButton
              onPress={hintHandler.bind(null, "lower")}
              className="w-16 h-16 p-1 items-center justify-center"
            >
              <AntDesign name="minus" size={24} color="white" />
            </PrimaryButton>
            <PrimaryButton
              onPress={hintHandler.bind(null, "greater")}
              className="w-16 h-16 p-1 items-center justify-center"
            >
              <AntDesign name="plus" size={24} color="white" />
            </PrimaryButton>
          </View>

          {/* Warning */}
          <View className="flex-row gap-4 mt-6">
            <FontAwesome5 name="skull" size={20} color="black" />

            <Text className="">
              You only have X chances of wrong hints left.
            </Text>
          </View>
        </InfoBox>

        <FlatList
          className="mt-8 h-60"
          data={guesses}
          renderItem={({ item, index }) => (
            <View className="bg-primary rounded-full px-6 pt-3 pb-2 mb-2">
              <Text className="text-white">
                <TextBold className="text-white uppercase">
                  Robot Output#{guesses.length - index}:{"  "}
                </TextBold>
                {item}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
