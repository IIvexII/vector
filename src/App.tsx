import { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import GameScreen from "./screens/game-screen";
import StartGameScreen from "./screens/start-game-screen";
import Scene1 from "./screens/onboarding-screen/scene-1";

import { backgroundImage } from "./constants/images";

import "./styles/global.css";
import OnboardingScreen from "./screens/onboarding-screen";

// Prevent the splash screen from hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    "Fira-Mono": require("../assets/fonts/FiraMono-Regular.ttf"),
  });

  // Hide the splash screen when the app is loaded
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <ImageBackground
        source={backgroundImage}
        className="flex-1"
        imageClassName="opacity"
        resizeMode="stretch"
      >
        <SafeAreaView className="flex-1">
          <OnboardingScreen />
        </SafeAreaView>
      </ImageBackground>
      {/* FIXME: unhide the status bar */}
      <StatusBar style="light" hidden />
    </>
  );
}
