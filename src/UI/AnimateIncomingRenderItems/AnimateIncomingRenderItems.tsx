import React, { useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';
import styles from './styleSheetAnimateIncomingRenderItems';

type TAnimateIncomingRenderItems = {
    index: number;
    trigger: boolean;
    children: React.ReactNode;
}
const { height: HEIGHT } = Dimensions.get('screen');

export default function AnimateIncomingRenderItems(
  { index, trigger, children }: TAnimateIncomingRenderItems,
) {
  const translateY = new Animated.Value(HEIGHT);
  useEffect(() => {
    if (trigger) {
      Animated.timing(translateY, {
        toValue: 0,
        delay: index < 5 ? index * 10 : 10,
        useNativeDriver: true,
        duration: 250,
      }).start();
    }
  }, [trigger]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY,
            },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}
