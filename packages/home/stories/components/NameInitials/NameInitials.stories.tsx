import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NameInitials from '../../../src/components/NameInitials';
import './NameInitials.scss';

export default {
  title: 'Atoms/Name Initials',
  component: NameInitials
} as ComponentMeta<typeof NameInitials>;

const Template: ComponentStory<typeof NameInitials> = (args) => <NameInitials {...args} />;
export const Default = Template.bind({});
Default.args = { fullName: 'Juan Perez', style: { backgroundColor: 'red' } };
