import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NameInitialsComponent from '../../../src/components/NameInitials';
import './NameInitials.scss';

export default {
  title: 'Atoms/Name Initials',
  component: NameInitialsComponent
} as ComponentMeta<typeof NameInitialsComponent>;

const Template: ComponentStory<typeof NameInitialsComponent> = (args) => <NameInitialsComponent {...args} />;
export const NameInitials = Template.bind({});
NameInitials.argTypes = {
  fullName: { control: 'text', required: true }
};
NameInitials.args = {
  fullName: 'Juan Perez'
};
