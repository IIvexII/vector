import { View, Text } from "react-native";
import React from "react";

type GameScreenProps = {
  userChoice: number;
};

export default function GameScreen(props: GameScreenProps) {
  return (
    <View>
      <Text>GameScreen</Text>
    </View>
  );
}
