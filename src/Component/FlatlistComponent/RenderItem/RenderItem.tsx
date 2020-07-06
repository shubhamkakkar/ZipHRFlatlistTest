import React from 'react';
import { Text, View } from 'react-native';
import { TRandomData } from '../randomData';
import styles from './styleSheetRenderItem';
import { CardTitle } from '../../../UI';

type TRenderItem = {
  item: TRandomData;
};
export default function RenderItem({ item }: TRenderItem) {
  return (
    <View style={styles.card}>
      <CardTitle title={item.appName} />
      <View style={styles.cardDescription}>
        <View>
          <Text>{ item.actionTaken }</Text>
          <Text>{ item.meetingType }</Text>
        </View>
      </View>
    </View>
  );
}
