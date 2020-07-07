import React, { useState } from 'react';
import { FlatList, RefreshControl, Alert } from 'react-native';
import { AnimateIncomingRenderItems, ListHeaderUI } from '../../UI';
import RenderItem from './RenderItem/RenderItem';
import { flatlistDefaultProps } from '../../globals/globalFlatListProps';
import { TRandomData, randomData } from './randomData';
import { useBooleanState } from '../../customHooks';
import useNetworkState from '../../customHooks/useNetworkState/useNetworkState';

export default function FlatlistComponent() {
  const [data, setData] = useState<TRandomData[]>(randomData);
  const [isConnected] = useNetworkState();
  const [loader, , setLoader] = useBooleanState();
  function shuffleData() {
    /*
    * This function could be used to get data from an API
    * */
    if (isConnected) {
      setLoader(true);
      // made loader true
      setTimeout(() => {
        const shuffledRandomData = data.sort(() => Math.random() - 0.5);
        setData(shuffledRandomData);
        setLoader(false); // made loader false
      }, 2500);
    } else {
      /*
      * For Now we are rendering old data
      */
      Alert.alert(
        'Internet Connectivity Failed',
        'You are having trouble with network connectivity, please ensure stable internet connectivity',
      );
      /*
        * react-native-offline can be used to handle the case for creating an offline queue
        to handle the API calls
        in case when internet is not connected,
        which will handle calls to those apis as soon as internet resumes
        * NOTE : A complete declarative instance for the same can be found on the following link,
          https://github.com/rgommezz/react-native-offline
      * */
    }
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
