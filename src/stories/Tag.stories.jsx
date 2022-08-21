import React from 'react';

import { Tag } from './Tag';

export default {
  title: 'Example/Tag',
  component: Tag,
  parameters: {
  },
};

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  role: 'Role',
};

