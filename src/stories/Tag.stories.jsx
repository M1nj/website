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
  label: 'Role',
};

export const Product_Management = Template.bind({});
Product_Management.args = {
  label: 'Project Management',
};

export const Research = Template.bind({});
Research.args = {
  label: 'Research',
};

export const Design = Template.bind({});
Design.args = {
  label: 'Design',
};

export const Code = Template.bind({});
Code.args = {
  label: 'Code',
};
