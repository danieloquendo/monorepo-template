import { Link } from '@faststore/ui';
import React from 'react';
import { ICategoryMenu } from '../../types/CategoryMenu';

export interface IListProps {
  title: React.ReactElement;
  items: ICategoryMenu[];
  subitems?: ICategoryMenu[];
  onHover?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  navigationIcon?: React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const List: React.FC<IListProps> = ({ title, items, subitems, navigationIcon, onHover, onClick }) => {
  return (
    <>
      <div data-category-menu-items-title>{title}</div>
      <ul data-category-menu-list>
        {items.map((item) => (
          <li
            data-category-menu-item-container
            data-item-id={item.id}
            key={`item${item.name.replace(' ', '_')}`}
          >
            <Link
              data-category-menu-item
              as="div"
              data-item-id={item.id}
              onMouseEnter={onHover}
              onClick={onClick}
            >
              <a href={item.href} data-item-id={item.id}>
                <p data-item-id={item.id}>{item.name}</p>
                {navigationIcon}
              </a>
            </Link>
            {subitems &&
              subitems
                ?.filter((subitem) => item.id === subitem.parent)
                .map((subitem) => (
                  <Link
                    data-category-menu-subitem
                    key={`subitem${subitem.name.replace(' ', '_')}`}
                    as="div"
                    onMouseEnter={onHover}
                    data-item-id={subitem.id}
                  >
                    <a href={subitem.href} data-item-id={subitem.id}>
                      <p data-item-id={subitem.id}>{subitem.name}</p>
                    </a>
                  </Link>
                ))}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
