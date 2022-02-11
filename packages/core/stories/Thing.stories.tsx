import React from 'react';
import { Meta, Story } from '@storybook/react';
import ExampleComponent, { Props } from '../src/components/CoreExample';

const meta: Meta = {
  title: 'Components/Example',
  component: ExampleComponent,
  argTypes: {
    children: {
      control: {
        type: 'text'
      }
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<Props> = (args) => <ExampleComponent {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
