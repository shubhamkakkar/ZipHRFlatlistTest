import React from 'react';
import { View, Text } from 'react-native';
import styles from './styleSheetCardTitle';

type TCardTitle = {
    title: string;
    color?: string;
    center?:boolean
}
export default function CardTitle({ title, center, color } : TCardTitle) {
  return (
    <View style={styles.containerCardTitle}>
      <View style={styles.cardTitleContainer}>
        <Text
          style={[
            styles.cardTitleText,
            { textAlign: center ? 'center' : 'left', color: color || 'black' },
          ]}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}
