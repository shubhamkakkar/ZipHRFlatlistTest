import React from 'react';
import { FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native';
import { AnimateIncomingRenderItems } from '../../UI';
import RenderItem from './RenderItem/RenderItem';
import { flatlistDefaultProps } from '../../globals/globalFlatListProps';

export default function FlatlistComponent() {
  return (
    <FlatList<string>
      {...{
        data: [],
        keyExtractor: (_, index) => index.toString(),
        renderItem: ({ item, index }: { item: string; index: number }) => (
          <AnimateIncomingRenderItems {...{ trigger: false, index }}>
            <RenderItem {...{ item }} />
          </AnimateIncomingRenderItems>
        ),
        ...flatlistDefaultProps,
      }}
    />
  );
}
