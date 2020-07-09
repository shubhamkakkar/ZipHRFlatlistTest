import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import FlatlistComponent from './FlatlistComponent';

it('FlatlistComponent renders correctly', () => {
  renderer.create(<FlatlistComponent />);
});

it('FlatlistComponent matches snapshot', () => {
  const tree = renderer.create(<FlatlistComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
