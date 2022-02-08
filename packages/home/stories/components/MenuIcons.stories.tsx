import React from 'react';
import MenuIcons from '../../src/components/MenuIcons';

export default {
  title: 'Atoms/Menu Icons',
  component: MenuIcons
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <MenuIcons {...args} />;

// 👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  style: { marginBottom: 10, background: '#fff' },
  menu: [
    { name: 'Mi cuenta', link: '/account', icon: <i className="fas fa-home" /> },
    { name: 'Mis pedidos', link: '/account#/orders', icon: <i className="fas fa-home" /> },
    {
      name: 'Mis listas de mercado',
      link: '/account#/buylist',
      icon: <i className="fas fa-home" />
    },
    {
      name: 'Mis listas de deseos',
      link: '/account#/buylist/wishlist',
      icon: <i className="fas fa-home" />
    }
  ]
};
