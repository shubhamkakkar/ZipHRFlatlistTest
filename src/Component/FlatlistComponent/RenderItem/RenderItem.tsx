import React from 'react';
import { Text, View } from 'react-native';
import { TRandomData } from '../randomData';

type TRenderItem = {
  item: TRandomData;
};
export default function RenderItem({ item }: TRenderItem) {
  return (
    <View>
      <Text>{ item.appName }</Text>
    </View>
  );
}
