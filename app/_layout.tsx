import FontAwesome from "@expo/vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SF_Regular: require("../src/assets/fonts/SF-Pro-Rounded-Regular.otf"),
    SF_Medium: require("../src/assets/fonts/SF-Pro-Rounded-Medium.otf"),
    SF_Semibold: require("../src/assets/fonts/SF-Pro-Rounded-Semibold.otf"),
    SF_Bold: require("../src/assets/fonts/SF-Pro-Rounded-Bold.otf"),
    SF_Heavy: require("../src/assets/fonts/SF-Pro-Rounded-Heavy.otf"),
    SF_Black: require("../src/assets/fonts/SF-Pro-Rounded-Black.otf"),
    Inter_Regular: require("../src/assets/fonts/Inter-Regular.ttf"),
    Inter_Medium: require("../src/assets/fonts/Inter-Medium.ttf"),
    Inter_SemiBold: require("../src/assets/fonts/Inter-SemiBold.ttf"),
    Inter_Bold: require("../src/assets/fonts/Inter-Bold.ttf"),
    Inter_ExtraBold: require("../src/assets/fonts/Inter-ExtraBold.ttf"),
    Inter_Black: require("../src/assets/fonts/Inter-Black.ttf"),
    ...FontAwesome.font,
  });
  const router = useRouter();

  async function handleTokens() {
    const tokens = await AsyncStorage.getItem("wallets");
    if (!tokens) {
      router.push("/backup");
    }
  }

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      handleTokens();
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="create" options={{ headerShown: false }} />
      <Stack.Screen
        name="backup"
        options={{ headerShown: true, title: "", headerBackTitle: "Back" }}
      />
    </Stack>
  );
}
