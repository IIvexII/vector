import { useState } from "react";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import GameScreen from "./screens/game-screen";
import StartGameScreen from "./screens/start-game-screen";

import { ORANGE_COLOR, PLUM_COLOR } from "./constants/colors";
import { backgroundImage } from "./constants/images";

import "./styles/global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  // Show the screen based on the userNumber state
  // so it will be changed when the user set the number
  let screen = <StartGameScreen onSetNumber={setUserNumber} />;

  if (userNumber) screen = <GameScreen userChoice={userNumber} />;

  return (
    <>
      <LinearGradient colors={[PLUM_COLOR, ORANGE_COLOR]} className="flex-1">
        <ImageBackground
          source={backgroundImage}
          className="flex-1"
          imageClassName="opacity-15"
          resizeMode="cover"
        >
          <SafeAreaView className="flex-1">{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
      <StatusBar style="light" hidden /> {/* temprarily Hide the status bar */}
    </>
  );
}
