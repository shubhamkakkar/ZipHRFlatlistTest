import { useEffect } from 'react';
import { checkInternetConnection } from 'react-native-offline';
import { useBooleanState } from '../index';

export default function useNetworkState(): [boolean] {
  const [isConnected, , setIsConnected] = useBooleanState();
  useEffect(() => {
    checkInternetConnection()
      .then((res) => setIsConnected(res))
      .catch((er) => {
        // console.log({ er });
        setIsConnected(false);
      });
  }, []);
  return [isConnected];
}
