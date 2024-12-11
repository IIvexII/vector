import React, { useState } from "react";
import { View, TextInput, Alert } from "react-native";

import InfoBox from "../components/ui/info-box";
import Robot from "../components/ui/robot";
import TextBold from "../components/ui/text-bold";
import PrimaryButton from "../components/ui/primary-button";
import GameScreen from "./game-screen";

type StartGameScreenProps = {
  changeScreen: (screen: React.JSX.Element) => void;
};

export default function StartGameScreen(props: StartGameScreenProps) {
  const [userInput, setUserInput] = useState("");

  /**
   * Show an alert when the user input is invalid
   * and the user press the confirm button
   */
  function confirmInputHandler() {
    // validate the user input
    if (isNaN(+userInput) || +userInput < 1 || +userInput > 99) {
      return Alert.alert(
        "Issue with Number Field",
        "Number has to be a number between 1 and 99.",
        [
          {
            text: "Okay",
            onPress: () => setUserInput(""),
          },
        ]
      );
    }

    // change screen to game screen
    props.changeScreen(
      <GameScreen userChoice={+userInput} changeScreen={props.changeScreen} />
    );

    // reset the input value
    setUserInput("");
  }

  return (
    <View>
      <View className="flex-row justify-center items-center mt-14">
        <Robot text="Waiting.." />
      </View>
      <InfoBox className="mt-[54px] mx-[40px] gap-2 py-6">
        <TextBold>Think of a number?</TextBold>
        <TextInput
          keyboardType="number-pad"
          placeholder="Number here..."
          className="border border-[#BCBCBC] rounded-full bg-white px-8 pt-4 pb-2 font-[Fira-Mono] text-xl"
          value={userInput}
          onChangeText={setUserInput}
        />

        <PrimaryButton
          onPress={confirmInputHandler}
          className="self-start mt-2"
        >
          Done
        </PrimaryButton>
      </InfoBox>
    </View>
  );
}
