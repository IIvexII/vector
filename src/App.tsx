import { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import OnboardingScreen from "./screens/onboarding-screen";
import StartGameScreen from "./screens/start-game-screen";

import { useFonts } from "./hooks/useFonts";

import { backgroundImage } from "./constants/images";
import * as Fonts from "./constants/fonts";
import Colors from "./constants/colors";

import "./styles/global.css";
import GameScreen from "./screens/game-screen";
import GameOverScreen from "./screens/game-over-screen";

export default function App() {
  useFonts("Fira-Mono", Fonts.FiraMono);
  const [startGame, setStartGame] = useState(false);
  const [screen, setScreen] = useState(
    <OnboardingScreen onStartGame={() => setStartGame(true)} />
  );

  // show the start game screen after onboarding screen is done
  useEffect(() => {
    if (startGame) {
      setScreen(
        <StartGameScreen
          changeScreen={(screen: React.JSX.Element) => setScreen(screen)}
        />
      );
    }
  }, [startGame]);

  return (
    <>
      <ImageBackground
        source={backgroundImage}
        className="flex-1"
        imageClassName="opacity"
        resizeMode="stretch"
      >
        <SafeAreaView className="flex-1">
          <GameOverScreen />
        </SafeAreaView>
      </ImageBackground>

      {/* status bar configurations */}
      <StatusBar style="dark" backgroundColor={Colors.seconday} />
    </>
  );
}
