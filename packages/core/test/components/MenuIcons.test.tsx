import React from 'react';
import MenuIcons from '../../src/components/MenuIcons';

const menu = [
  { name: 'Mi cuenta', link: '/account', icon: <div>X</div> },
  { name: 'Mis pedidos', link: '/account#/orders', icon: <div>X</div> },
  {
    name: 'Mis listas de mercado',
    link: '/account#/buylist',
    icon: <div>X</div>
  },
  {
    name: 'Mis listas de deseos',
    link: '/account#/buylist/wishlist',
    icon: <div>X</div>
  }
];

describe('<MenuIcons />', () => {
  it('Component render', () => {
    expect(<MenuIcons menu={menu} />).toBeTruthy();
  });
});
