import { useEffect } from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";

import Header from './components/header';
import Schedule from './components/Schedule/schedule';

export default function App() {

  const MavenProFonts = {
    "MavenPro-Regular": require("./assets/fonts/MavenPro/MavenPro-Regular.ttf"),
    "MavenPro-Medium": require("./assets/fonts/MavenPro/MavenPro-Medium.ttf"),
    "MavenPro-SemiBold": require("./assets/fonts/MavenPro/MavenPro-SemiBold.ttf"),
    "MavenPro-Bold": require("./assets/fonts/MavenPro/MavenPro-Bold.ttf"),
    "MavenPro-ExtraBold": require("./assets/fonts/MavenPro/MavenPro-ExtraBold.ttf"),
    "MavenPro-Black": require("./assets/fonts/MavenPro/MavenPro-Black.ttf"),
  };

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync(MavenProFonts);
    }

    loadFont();
  }, []);

  return (
    <View style={styles.container}>
      <Header/>
      <Schedule/>
      <StatusBar style="light" hidden = { false } translucent = { false } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
