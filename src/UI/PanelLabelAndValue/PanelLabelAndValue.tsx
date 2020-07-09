import React from 'react';
import { View, Text } from 'react-native';
import styles from './styleSheetPanelLabelAndValue';

type TPanelLabelAndValue = {
  title: string;
  value: number | string;
};

export default function PanelLabelAndValue({ title, value }: TPanelLabelAndValue) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.panelTextLabel]}>{title}</Text>
      <Text style={[styles.panelTextValue]}>{value && value.toString().trim()}</Text>
    </View>
  );
}
