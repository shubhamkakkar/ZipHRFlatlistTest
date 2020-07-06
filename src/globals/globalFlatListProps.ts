import { FlatListProps } from 'react-native';

export function flatlistDefaultProps(): Partial<FlatListProps<any>> {
  return {
    keyboardDismissMode: 'on-drag',
    keyboardShouldPersistTaps: 'always',
  };
}
