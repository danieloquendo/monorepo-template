import React from 'react';
import MenuIcons from '../../src/components/MenuIcons';

const menu = [
  { id: '1', name: 'Mi cuenta', link: '/account', icon: <div>X</div> },
  { id: '2', name: 'Mis pedidos', link: '/account#/orders', icon: <div>X</div> },
  {
    id: '3',
    name: 'Mis listas de mercado',
    link: '/account#/buylist',
    icon: <div>X</div>
  },
  {
    id: '4',
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
