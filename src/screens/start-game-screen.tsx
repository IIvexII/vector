import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";

import { Button } from "../components/button";
import Title from "../components/title";

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
            text: "",
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
      {/* main heading of screen */}
      <Title>Guess My Number</Title>

      {/* User Input Box */}
      <View className="bg-darkPlum px-8 py-8 justify-center items-center rounded-xl elevation-2xl">
        <Text className="text-2xl text-orange-200">Enter Number</Text>
        <TextInput
          className="w-[50] border-b-4 border-orange-300 text-orange-200 text-3xl mt-4 text-center"
          cursorColor={"orange"}
          keyboardType="number-pad"
          maxLength={2}
          value={userInput}
          onChangeText={setUserInput}
        />

        <View className="flex-row gap-6 mt-8">
          <Button onPress={resetInputHandler}>Reset</Button>
          <Button onPress={confirmInputHandler}>Confirm</Button>
        </View>
      </View>
    </View>
  );
}
