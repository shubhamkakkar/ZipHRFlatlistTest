import { View } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AnimateIncomingRenderItems from './AnimateIncomingRenderItems';

beforeEach(() => {
  jest.useFakeTimers();
});

it('AnimateIncomingRenderItems matches snapshot - props: {{ index: 0, trigger: false, }}', async () => {
  jest.advanceTimersByTime(500);
  const tree = await renderer.create(
    <AnimateIncomingRenderItems {...{
      index: 0,
      trigger: false,
    }}
    >
      <View />
    </AnimateIncomingRenderItems>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('AnimateIncomingRenderItems matches snapshot - props: {{ index: 0, trigger: true, }}', async () => {
  jest.advanceTimersByTime(500);
  const tree = await renderer.create(
    <AnimateIncomingRenderItems {...{
      index: 0,
      trigger: true,
    }}
    >
      <View />
    </AnimateIncomingRenderItems>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
