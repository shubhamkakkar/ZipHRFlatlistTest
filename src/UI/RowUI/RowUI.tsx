import React from 'react';
import { View } from 'react-native';
import styles from './styleSheetRowUI';

export default function RowUI({ children }: { children: React.ReactNode }) {
  return <View style={styles.rowUIContainer}>{children}</View>;
}
