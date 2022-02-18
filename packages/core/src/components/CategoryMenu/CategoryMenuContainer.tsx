import React from 'react';
import { ICategoryMenu } from '../types/CategoryMenu';
import CategoryMenu from './CategoryMenu';
import CategoryMenuProvider from './context/CategoryMenuContext';

export interface ICategoryMenuContainerProps {
  menu: ICategoryMenu[];
  isMobile?: boolean;
}

const CategoryMenuContainer: React.FC<ICategoryMenuContainerProps> = ({ menu, isMobile }) => {
  return (
    <CategoryMenuProvider menu={menu} isMobile={isMobile}>
      <CategoryMenu />
    </CategoryMenuProvider>
  );
};

export default CategoryMenuContainer;
