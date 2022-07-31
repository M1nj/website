import React from 'react';

import { Article } from './Article';

export default {
  title: 'Example/Article',
  component: Article,
  argTypes: {
    color: {
      options: ['blue', 'black', 'grey-100'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Article {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'Large',
  label: 'Title',
};
