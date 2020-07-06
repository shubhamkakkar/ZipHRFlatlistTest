import React from 'react';
import { View } from 'react-native';
import { TRandomData } from '../randomData';

type TRenderItem = {
  item: TRandomData;
};
export default function RenderItem({ item }: TRenderItem) {
  return <View />;
}
