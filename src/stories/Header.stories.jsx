import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'allowFullScreen',
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});