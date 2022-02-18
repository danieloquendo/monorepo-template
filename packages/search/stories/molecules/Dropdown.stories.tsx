import React from 'react';
import { Dropdown } from '../../src/components/SearchByCategory/Dropdown';
import { Meta, Story } from '@storybook/react';
import { DropdownProps } from '../../src/components/SearchByCategory/interfaces';
import './dropdown.scss';

const categories = [
  {
    title: 'Tecnologia',
    remoteId: '2'
  },
  {
    title: 'Plus',
    remoteId: '1'
  },
  {
    title: 'Moda',
    remoteId: '3'
  }
];

const meta: Meta = {
  title: 'Organisms/SearchByCategory/Dropdown',
  component: Dropdown,
  args: {
    categories
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {};
