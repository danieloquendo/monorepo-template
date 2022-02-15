import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SearchByCategory } from '../src';
import { Props } from '../src/components/SearchByCategory';

const meta: Meta = {
  title: 'SearchByCategory',
  component: SearchByCategory,
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

const Template: Story<Props> = (args) => <SearchByCategory {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Dropdown = Template.bind({});

Dropdown.args = {};
