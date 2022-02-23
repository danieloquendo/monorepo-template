import React from 'react';
import { Meta, Story } from '@storybook/react';
import Newsletter, { NewsletterProps } from '../../../src/components/Newsletter/Newsletter';
import './Newsletter.scss';

const meta: Meta = {
  title: 'Organisms/Newsletter',
  component: Newsletter,
  args: {
    title: 'Testing title',
    subtitle: 'Testing sub-title',
    submit: 'Testing subscribe'
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<NewsletterProps> = (args) => <Newsletter {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {};
