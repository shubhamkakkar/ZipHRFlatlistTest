import React from 'react';
import { View, Text } from 'react-native';
import styles from './styleSheetListHeaderUI';

type TListHeaderUI = {
    title: string
}

export default function ListHeaderUI({ title }: TListHeaderUI) {
  return (
    <View style={styles.container}>
      <View style={styles.listHeaderTitleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}
