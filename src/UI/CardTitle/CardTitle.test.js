import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CardTitle from './CardTitle';

it('CardTitle matches snapshot - props: {{  title: "Title" }}', () => {
  const tree = renderer.create(<CardTitle {...{ title: 'Title' }} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('CardTitle matches snapshot - props: {{ title: "Title" , center: true }}', () => {
  const tree = renderer.create(<CardTitle {...{ title: 'Title', center: true }} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('CardTitle matches snapshot - props: {{ title: "Title", color: "red" }}', () => {
  const tree = renderer.create(<CardTitle {...{ title: 'Title', color: 'red' }} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('CardTitle matches snapshot - props: {{ title: "Title", color: "red"  , center: true}}', () => {
  const tree = renderer.create(<CardTitle {...{ title: 'Title', color: 'red', center: true }} />).toJSON();
  expect(tree).toMatchSnapshot();
});
