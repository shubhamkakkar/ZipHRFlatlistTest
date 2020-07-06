import React, { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { AnimateIncomingRenderItems, ListHeaderUI } from '../../UI';
import RenderItem from './RenderItem/RenderItem';
import { flatlistDefaultProps } from '../../globals/globalFlatListProps';
import { TRandomData, randomData } from './randomData';
import { useBooleanState } from '../../customHooks';

export default function FlatlistComponent() {
  const [data, setData] = useState<TRandomData[]>(randomData);
  const [loader, , setLoader] = useBooleanState();
  function shuffleData() {
    setLoader(true); // made loader true
    setTimeout(() => {
      const shuffledRandomData = data.sort(() => Math.random() - 0.5);
      setData(shuffledRandomData);
      setLoader(false); // made loader false
    }, 2500);
  }

  return (
    <FlatList<TRandomData>
      {...{
        data,
        extraData: data,
        keyExtractor: (_, index) => index.toString(),
        ListHeaderComponent: <ListHeaderUI title={`Clients (${data.length})`} />,
        renderItem: ({ item, index }: { item: TRandomData; index: number }) => (
          <AnimateIncomingRenderItems {...{ trigger: !loader, index }}>
            <RenderItem {...{ item }} />
          </AnimateIncomingRenderItems>
        ),
        refreshControl: <RefreshControl refreshing={loader} onRefresh={shuffleData} />,
        ...flatlistDefaultProps,
      }}
    />
  );
}
