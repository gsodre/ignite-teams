import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Groups } from "@screens/Groups";
import theme from "@theme/index";
import { Loading } from "@components/Loading";
import { StatusBar } from "react-native";
import { NewGroup } from "@screens/NewGroup";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      {/* {fontsLoaded ? <Groups /> : <Loading />} */}
      {fontsLoaded ? <NewGroup /> : <Loading />}
    </ThemeProvider>
  );
}