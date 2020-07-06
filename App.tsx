import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FlatlistComponent from './src/Component/FlatlistComponent/FlatlistComponent';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="#009ae0"
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
