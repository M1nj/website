import React from 'react';

import { Title } from './Title';

export default {
  title: 'Example/Title',
  component: Title,

};

const Template = (args) => <Title {...args} />;

export const H1 = Template.bind({});
H1.args = {
  type: 'h1',
  label: 'Title',
};

export const H2 = Template.bind({});
H2.args = {
  type: 'h2',
  title: 'Title',
};

export const H3 = Template.bind({});
H3.args = {
  type: 'h3',
  title: 'Title',
};

export const H4 = Template.bind({});
H4.args = {
  type: 'h4',
  title: 'Title',
};
