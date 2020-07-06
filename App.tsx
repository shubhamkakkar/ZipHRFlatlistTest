import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FlatlistComponent from './src/Component/FlatlistComponent/FlatlistComponent';
import theme from './src/theme';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={theme.primaryColor}
        translucent
        hidden={false}
        networkActivityIndicatorVisible
      />
      <SafeAreaProvider>
        <SafeAreaView style={[StyleSheet.absoluteFill]}>
          <FlatlistComponent />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
