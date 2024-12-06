import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";

import { Button } from "../components/ui/button";
import Title from "../components/ui/title";
import Box from "../components/ui/box";

type StartGameScreenProps = {
  onSetNumber: (number: number) => void;
};

export default function StartGameScreen(props: StartGameScreenProps) {
  const [userInput, setUserInput] = useState("");

  /**
   * Reset the input value to empty string
   * when the user press the reset button
   */
  function resetInputHandler() {
    setUserInput("");
  }

  /**
   * Show an alert when the user input is invalid
   * and the user press the confirm button
   */
  function confirmInputHandler() {
    // validate the user input
    if (isNaN(+userInput) || +userInput < 1 || +userInput > 99) {
      Alert.alert(
        "Issue with Number Field",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            onPress: resetInputHandler,
          },
        ]
      );
    }

    // set the user input to the parent component
    props.onSetNumber(+userInput);
  }

  return (
    <View className="flex-1 gap-8 justify-center items-center bg-transparent">
      {/* Heading of the screen */}
      <Title text="Guess My Number" />

      {/* User Input Box */}
      <Box className="justify-center items-center">
        <Text className="text-2xl text-orange-200">Enter Number</Text>
        <TextInput
          className="w-[50] border-b-4 border-accent200 text-accent200 text-3xl mt-4 text-center"
          cursorColor={"orange"}
          keyboardType="number-pad"
          maxLength={2}
          value={userInput}
          onChangeText={setUserInput}
        />
        {/* Buttons */}
        <View className="flex-row gap-6 mt-8">
          <Button onPress={resetInputHandler}>Reset</Button>
          <Button onPress={confirmInputHandler}>Confirm</Button>
        </View>
      </Box>
    </View>
  );
}
