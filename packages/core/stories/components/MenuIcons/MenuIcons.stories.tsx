import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuIcons from '../../../src/components/MenuIcons';
import { checkPaperIcon, heartIcon, truckIcon, userIcon } from '../../icons';
import './MenuIcons.scss';

const menu = [
  { name: 'Mi cuenta', link: '/account', icon: userIcon },
  { name: 'Mis pedidos', link: '/account#/orders', icon: truckIcon },
  {
    name: 'Mis listas de mercado',
    link: '/account#/buylist',
    icon: checkPaperIcon
  },
  {
    name: 'Mis listas de deseos',
    link: '/account#/buylist/wishlist',
    icon: heartIcon
  }
];

export default {
  title: 'Atoms/MenuIcons',
  component: MenuIcons
} as ComponentMeta<typeof MenuIcons>;

const Template: ComponentStory<typeof MenuIcons> = (args) => <MenuIcons {...args} />;
export const Default = Template.bind({});
Default.args = { menu };
