import React, { FC } from 'react';

interface Menu {
  name: string;
  link: string;
  icon: React.ReactNode;
}

export interface Props {
  menu: Menu[];
}

const MenuIcons: FC<Props> = ({ menu }) => {
  return (
    <div data-menu-icons-content>
      <ul data-menu-icons-list>
        {menu.map((item, index) => (
          <li data-menu-icons-item key={index}>
            {item.icon}
            <a data-menu-icons-link href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuIcons;
