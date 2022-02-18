import React from 'react';
import { Button } from '@faststore/ui';
import { List as ListIcon } from 'phosphor-react';
import { useCategoryMenuContext } from './context/CategoryMenuContext';
import SideMenu from './SideMenu/SideMenu';
import Departments from './MenuDeparments';
import Categories from './MenuCategories';
import MenuSubcategories from './MenuSubcategories';

const CategoryMenu: React.FC = () => {
  const {
    isMobile,
    showDepartments,
    showCategories,
    selectedDepartment,
    selectedCategory,
    showSubcategories,
    onDepartmentsAction,
    setDefaultDepartment,
    onCategoriesAction,
    onSubcategoriesAction
  } = useCategoryMenuContext();
  return (
    <>
      <Button
        id="open-category-menu"
        data-category-menu-button
        aria-label="Open Menu"
        onClick={onDepartmentsAction}
      >
        <ListIcon size={32} />
      </Button>
      {showDepartments && (
        <div
          data-category-menu-container
          className={`${isMobile ? 'mobile' : 'desktop'}`}
          onClick={onDepartmentsAction}
        >
          <div data-category-menu-side-menu-departments>
            <SideMenu onClose={onDepartmentsAction} showMenu={showDepartments} isMobile={isMobile}>
              <Departments />
            </SideMenu>
          </div>

          {selectedDepartment.id !== '0' && showDepartments && (
            <div data-category-menu-side-menu-categories>
              <SideMenu
                onClose={onCategoriesAction}
                onMouseLeave={isMobile ? undefined : setDefaultDepartment}
                showMenu={showCategories}
                isMobile={isMobile}
              >
                <Categories />
              </SideMenu>
            </div>
          )}

          {selectedCategory.id !== '0' && showCategories && isMobile && (
            <div data-category-menu-side-menu-subcategories>
              <SideMenu onClose={onSubcategoriesAction} showMenu={showSubcategories} isMobile={isMobile}>
                <MenuSubcategories />
              </SideMenu>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CategoryMenu;
