import { Link } from '@faststore/ui';
import React from 'react';
import { ICategoryMenu } from '../../types/CategoryMenu';

export interface IListProps {
  title: React.ReactElement;
  items: ICategoryMenu[];
  subitems?: ICategoryMenu[];
  onHover?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  navigationIcon?: React.ReactElement;
}

const List: React.FC<IListProps> = (props) => {
  const { title, items, subitems, onHover, navigationIcon } = props;
  const handleHover = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onHover) {
      onHover(event);
    }
  };
  return (
    <>
      <p data-category-menu-items-title>{title}</p>
      <ul data-category-menu-list>
        {items.map((item) => (
          <li data-category-menu-item-container key={`item${item.name.replace(' ', '_')}`}>
            <Link data-category-menu-item as="div" onMouseEnter={handleHover} data-item-id={item.id}>
              <a href={item.href}>
                <p>{item.name}</p>
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
                    onMouseEnter={handleHover}
                    data-item-id={subitem.id}
                  >
                    <a href={subitem.href}>
                      <p>{subitem.name}</p>
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
