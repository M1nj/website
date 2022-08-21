import React from 'react';

import { Title } from './Title';

export default {
  title: 'Example/Title',
  component: Title,
  argTypes: {
    type: {
      options: ['h1', 'h2', 'h3', 'h4'],
      control: { type: 'select' },
    },
  }

};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'h1',
  label: 'Title',
};