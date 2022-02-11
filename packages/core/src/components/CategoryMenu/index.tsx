import React, { useMemo, useState } from 'react';
import Services from './Services';
import { Button, Link } from '@faststore/ui';
import { List as ListIcon, X as CloseIcon } from 'phosphor-react';
import Departments from './Deparments';
import Categories from './Categories';
import { ICategoryMenu } from '../types/CategoryMenu';

export interface ICategoryMenuProps {
  menu: ICategoryMenu[];
}

const CategoryMenu = (props: ICategoryMenuProps) => {
  const { menu } = props;
  const [showMenu, setShowMenu] = useState(false);
  const [parentDeparment, setParentDepartment] = useState({ id: '0' } as ICategoryMenu);

  // Memoize departments, categories and subcategories
  const departments = useMemo(() => menu?.filter((category) => (category.parent ? false : true)), [menu]);
  const categories = useMemo(
    () => menu?.filter((category) => category.parent === parentDeparment.id),
    [menu, parentDeparment]
  );
  const subcategories = useMemo(
    () =>
      menu?.filter(
        (menuCategory) => !!categories.find((category: ICategoryMenu) => category.id === menuCategory.parent)
      ),
    [menu, categories]
  );
  const handleModalAction = () => {
    setShowMenu(!showMenu);
    setParentDepartment({ id: '0', href: '/', name: 'default', showIconLeft: false });
  };
  return (
    <>
      <Button
        id="open-category-menu"
        data-category-menu-button
        aria-label="Open Menu"
        onClick={handleModalAction}
      >
        <ListIcon size={32} />
      </Button>
      {menu && menu.length && showMenu && (
        <div data-category-menu-page onClick={handleModalAction}>
          <div data-category-menu-container aria-label="Categories">
            <div data-category-menu-header aria-label="header">
              <Link href="/" as="a">
                <svg data-category-menu-header-logo>
                  <image xlinkHref="https://vtex-resources.s3.amazonaws.com/images/exito.svg" />
                </svg>
              </Link>
              <Button
                id="close-category-menu"
                data-category-menu-close-button
                aria-label="Close Menu"
                onClick={handleModalAction}
              >
                <CloseIcon size={32} />
              </Button>
            </div>
            <div data-category-menu-content-container aria-label="Navigation options">
              <Departments setParentDepartment={setParentDepartment} departments={departments} />
              <Services />
            </div>
          </div>
          {parentDeparment.id !== '0' && (
            <Categories categories={categories} subcategories={subcategories} department={parentDeparment} />
          )}
        </div>
      )}
    </>
  );
};

export default CategoryMenu;
