import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import PanelLabelAndValue from './PanelLabelAndValue';

it('PanelLabelAndValue matches snapshot - props: {{ title: "", value: "" }}', () => {
  const tree = renderer.create(<PanelLabelAndValue {...{ title: '', value: '' }} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('PanelLabelAndValue matches snapshot - props: {{ title: "", value: 0 }}', () => {
  const tree = renderer.create(<PanelLabelAndValue {...{ title: '', value: 0 }} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('PanelLabelAndValue matches snapshot - props: {{ title: "title", value: "" }}', () => {
  const tree = renderer.create(<PanelLabelAndValue {...{ title: 'title', value: '' }} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('PanelLabelAndValue matches snapshot - props: {{ title: "title", value: 0 }}', () => {
  const tree = renderer.create(<PanelLabelAndValue {...{ title: 'title', value: 0 }} />).toJSON();
  expect(tree).toMatchSnapshot();
});
