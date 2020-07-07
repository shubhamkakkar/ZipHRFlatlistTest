import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NetworkProvider } from 'react-native-offline';
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
          <NetworkProvider>
            <FlatlistComponent />
          </NetworkProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
