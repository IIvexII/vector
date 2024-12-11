import { useEffect } from "react";
import { FontSource, useFonts as useFontsDefault } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from hiding
SplashScreen.preventAutoHideAsync();

type Font = {
  [fontFamily: string]: string;
};

/**
 * Load the custom fonts and hide the splash screen
 * @param fontName
 * @param fontSource
 * @returns
 */
export function useFonts(
  fontName: string,
  fontSource: Record<string, FontSource>
) {
  const [loaded, error] = useFontsDefault({
    [fontName]: fontSource,
  });

  // Hide the splash screen when the app is loaded
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return [loaded, error];
}
