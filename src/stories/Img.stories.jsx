
import React from 'react';

import Img from './Img';

export default {
  title: 'Example/Img',
  component: Img,
};

const Template = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  url: 'https://dummyimage.com/1920x400/000/fff',
  supportText: 'This is an alt',
};
