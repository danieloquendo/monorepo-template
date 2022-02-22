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

export const Dropdown = Template.bind({});

Dropdown.args = {};
