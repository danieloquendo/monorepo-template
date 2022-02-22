import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuIconsComponent from '../../../src/components/MenuIcons';
import { checkPaperIcon, heartIcon, truckIcon, userIcon } from '../../icons';
import './MenuIcons.scss';

const menu = [
  { id: '1', name: 'Mi cuenta', link: '/account', icon: userIcon },
  { id: '2', name: 'Mis pedidos', link: '/account#/orders', icon: truckIcon },
  {
    id: '3',
    name: 'Mis listas de mercado',
    link: '/account#/buylist',
    icon: checkPaperIcon
  },
  {
    id: '4',
    name: 'Mis listas de deseos',
    link: '/account#/buylist/wishlist',
    icon: heartIcon
  }
];

export default {
  title: 'Atoms/Menu Icons',
  component: MenuIconsComponent
} as ComponentMeta<typeof MenuIconsComponent>;

const Template: ComponentStory<typeof MenuIconsComponent> = (args) => <MenuIconsComponent {...args} />;
export const MenuIcons = Template.bind({});
MenuIcons.args = { menu };
