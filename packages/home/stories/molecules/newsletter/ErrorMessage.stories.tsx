import React from 'react';
import { Meta, Story } from '@storybook/react';
import ErrorMessage, { Props } from '../../../src/components/Newsletter/ErrorMessages';
import './ErrorMessage.scss';

const meta: Meta = {
  title: 'Organisms/Newsletter/ErrorMessages',
  component: ErrorMessage,
  args: {
    errors: {
      checkButton: 'CheckButton error',
      email: 'email error',
      alreadySubscribed: 'already Subscribed'
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<Props> = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});
Default.args = {};
