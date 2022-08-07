import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    actions: {
      handles: ['click button'],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const primary = Template.bind({});
primary.args = {
  style: 'primary',
  label: 'Title',
};

export const secondary = Template.bind({});
secondary.args = {
  style: 'secondary',
  label: 'Title',
};

export const text = Template.bind({});
text.args = {
  style: 'text',
  label: 'Title',
};
