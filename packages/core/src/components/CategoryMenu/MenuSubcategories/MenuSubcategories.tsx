import React from 'react';
import List from '../LinkList';
import { Link } from '@faststore/ui';
import { useCategoryMenuContext } from '../context/CategoryMenuContext';

const MenuSubcategories: React.FC = () => {
  const { subcategories, selectedCategory } = useCategoryMenuContext();

  return (
    <div data-category-menu-subcategories-container>
      <List
        title={
          <Link as="a" href={selectedCategory.href}>
            <p>{selectedCategory.name}</p>
          </Link>
        }
        items={subcategories.filter((subcategory) => subcategory.parent === selectedCategory.id)}
      />
    </div>
  );
};

export default MenuSubcategories;
