import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';
import PhoneCallUI from './PhoneCallUI';

it('PhoneCallUI matches snapshot - props: {{ number: \'9818163250\',, }}', async () => {
  const tree = renderer.create(
    <PhoneCallUI {...{
      number: '9818163250',
    }}
    >
      <View />
    </PhoneCallUI>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
