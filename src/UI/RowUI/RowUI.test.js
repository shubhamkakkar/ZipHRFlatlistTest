import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';
import RowUI from './RowUI';

it('RowUI matches snapshot', () => {
  const tree = renderer
    .create(
      <RowUI>
        <View />
        <View />
      </RowUI>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
