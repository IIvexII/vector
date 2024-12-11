import { useState } from "react";
import { ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import OnboardingScreen from "./screens/onboarding-screen";

import { useFonts } from "./hooks/useFonts";

import { backgroundImage } from "./constants/images";
import * as Fonts from "./constants/fonts";

import "./styles/global.css";

export default function App() {
  useFonts("Fira-Mono", Fonts.FiraMono);
  const [screen, setScreen] = useState(
    <OnboardingScreen
      changeScreen={(screen: React.JSX.Element) => setScreen(screen)}
    />
  );

  return (
    <>
      <ImageBackground
        source={backgroundImage}
        className="flex-1"
        imageClassName="opacity"
        resizeMode="stretch"
      >
        <SafeAreaView className="flex-1">{screen}</SafeAreaView>
      </ImageBackground>

      {/* status bar configurations */}
      <StatusBar style="dark" hidden />
    </>
  );
}
