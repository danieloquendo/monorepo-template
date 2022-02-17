import React from 'react';

import Newsletter from '../../../src/components/Newsletter/Newsletter';
import './Newsletter.scss';

export default {
  component: Newsletter,
  title: 'Newsletter'
};

const Template = (args) => <Newsletter {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'foo',
  subtitle: 'bar',
  submit: 'Suscríbete'
};
