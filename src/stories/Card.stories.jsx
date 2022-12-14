import React from 'react';

import Card from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    color: {
      options: ['blue', 'black', 'grey-100'],
      control: { type: 'select' },
    },
    size: {
      options: ['Small', 'Medium', 'Large'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'Large',
  title: 'Title',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'Medium',
  title: 'Title',
};

export const Small = Template.bind({});
Small.args = {
  size: 'Small',
  title: 'Title',
};
