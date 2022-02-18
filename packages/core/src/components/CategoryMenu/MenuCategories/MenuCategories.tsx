import React from 'react';
import { ICategoryMenu } from '../../types/CategoryMenu';
import List from '../LinkList';
import { Link } from '@faststore/ui';
import { DEFAULT_CATEGORY } from '../constants';
import { pathOr } from 'ramda';
import { useCategoryMenuContext } from '../context/CategoryMenuContext';

const MenuCategories: React.FC = () => {
  const { categories, subcategories, isMobile, selectedDepartment, setSelectedCategory } =
    useCategoryMenuContext();

  const setCategoryBySelectedLink: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const hoveredCategoryId = pathOr(0, ['target', 'dataset', 'itemId'], event);
    const hoveredCategory =
      categories.find((category: ICategoryMenu) => category.id === hoveredCategoryId.toString()) ??
      DEFAULT_CATEGORY;

    console.log('Click', { hoveredCategory });
    setSelectedCategory(hoveredCategory);
  };

  /* Only when mobile */
  const onClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (isMobile) {
      event.preventDefault();
      event.stopPropagation();
      setCategoryBySelectedLink(event);
    }
  };

  return (
    <div data-category-menu-categories-container>
      <List
        title={
          <Link as="a" href={selectedDepartment.href}>
            <p>{selectedDepartment.name}</p>
          </Link>
        }
        items={categories}
        subitems={isMobile ? undefined : subcategories}
        onClick={onClick}
      />
    </div>
  );
};

export default MenuCategories;
