import React from 'react';
import { ICategoryMenu } from '../../types/CategoryMenu';
import List from '../List';
import { Link } from '@faststore/ui';

export interface ICategoriesProps {
  categories: ICategoryMenu[];
  subcategories: ICategoryMenu[];
  department: ICategoryMenu;
}

const Categories = (props: ICategoriesProps) => {
  const { categories, subcategories, department } = props;
  return (
    <div data-category-menu-categories-container>
      <List
        title={
          <Link as="a" href={department.href}>
            <p>{department.name}</p>
          </Link>
        }
        items={categories}
        subitems={subcategories}
      />
    </div>
  );
};

export default Categories;
