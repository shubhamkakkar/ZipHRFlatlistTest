import React from 'react';
import { Text, View } from 'react-native';
import { TRandomData } from '../randomData';
import styles from './styleSheetRenderItem';
import {
  CardTitle, PanelLabelAndValue, PhoneCallUI, RowUI,
} from '../../../UI';

type TRenderItem = {
  item: TRandomData;
};
export default function RenderItem({ item }: TRenderItem) {
  return (
    <View style={styles.card}>
      <CardTitle title={item.appName} />
      <View style={styles.cardDescription}>
        <RowUI>
          <PanelLabelAndValue {...{ title: 'Meeting Type', value: item.meetingType }} />
          <PanelLabelAndValue {...{ title: 'Action Taken', value: item.actionTaken }} />
        </RowUI>
        <PhoneCallUI number={item.phoneNumber}>
          <PanelLabelAndValue {...{ title: 'Phone Number', value: item.phoneNumber }} />
        </PhoneCallUI>
      </View>
    </View>
  );
}
