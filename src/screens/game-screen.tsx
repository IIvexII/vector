import { useEffect, useState } from "react";
import { Alert, View } from "react-native";

import Title from "../components/ui/title";
import Box from "../components/ui/box";
import { gnRandomNum } from "../lib/utils";
import { Button } from "../components/ui/button";

type GameScreenProps = {
  userChoice: number;
};

let minNumber = 1;
let maxNumber = 100;

export default function GameScreen(props: GameScreenProps) {
  const [currentGuess, setCurrentGuess] = useState<number>(
    gnRandomNum(minNumber, maxNumber)
  );

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
      Alert.alert("Congraturations to me!", "I have guessed it right.");
    }
  }, [currentGuess]);

  return (
    <View className="flex-1 justify-center items-center gap-8">
      <Title text="Opponents Screen" />
      <Box className="gap-8">
        <Title text={`${currentGuess}`} className="py-2" />
        <View className="flex-row gap-6">
          <Button
            onPress={hintHandler.bind(null, "lower")}
            textClassName="text-4xl font-bold"
          >
            -
          </Button>
          <Button
            onPress={hintHandler.bind(null, "greater")}
            textClassName="text-4xl font-bold"
          >
            +
          </Button>
        </View>
      </Box>
    </View>
  );
}
