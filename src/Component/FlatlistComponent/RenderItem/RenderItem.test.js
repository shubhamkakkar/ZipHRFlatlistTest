import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import RenderItem from './RenderItem';
import { randomData } from '../randomData';

it('RenderItem matches snapshot - props: {{ item }}', () => {
  const tree = renderer.create(<RenderItem {...{ item: randomData[0] }} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('RenderItem matches snapshot - props: {{ item: [] }}', () => {
  const tree = renderer.create(<RenderItem {...{ item: [] }} />).toJSON();
  expect(tree).toMatchSnapshot();
});
