import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ListHeaderUI from './ListHeaderUI';

it('ListHeaderUI matches snapshot - props: {{ title: "" }}', () => {
  const tree = renderer.create(<ListHeaderUI {...{ title: '' }} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('ListHeaderUI matches snapshot - props: {{ title: "title" }}', () => {
  const tree = renderer.create(<ListHeaderUI {...{ title: 'title' }} />).toJSON();
  expect(tree).toMatchSnapshot();
});
