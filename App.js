import { AppLoading } from 'expo';
import { StatusBar as EStatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';

import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import appStyles from './Styles';
import Routes from './routes/GameStack';

const loadFont = () => Font.loadAsync({
  'pixel-regular': require('./assets/fonts/PressStart2P-Regular.ttf')
})

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={loadFont}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }

  return (
    <SafeAreaView style={appStyles.app}>

      <Routes />

      <EStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
