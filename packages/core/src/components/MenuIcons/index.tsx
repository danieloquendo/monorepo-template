import React, { FC } from 'react';

interface Menu {
  id: string;
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
        {menu.map(({ icon, id, link, name }) => (
          <li data-menu-icons-item key={id}>
            {icon}
            <a data-menu-icons-link href={link}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuIcons;
