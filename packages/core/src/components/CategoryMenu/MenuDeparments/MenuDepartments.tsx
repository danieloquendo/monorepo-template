import React from 'react';
import { pathOr } from 'ramda';
import { ICategoryMenu } from '../../types/CategoryMenu';
import List from '../LinkList';
import { CaretRight } from 'phosphor-react';
import { DEFAULT_CATEGORY } from '../constants';
import { useCategoryMenuContext } from '../context/CategoryMenuContext';

export interface IDepartmentsPops {
  setParentDepartment: (departmentId: ICategoryMenu) => void;
  departments: ICategoryMenu[];
  isMobile: boolean;
}

const MenuDepartments = () => {
  const { departments, isMobile, setSelectedDepartment } = useCategoryMenuContext();
  const setDepartmentBySelectedLink: React.MouseEventHandler<HTMLElement> = (event) => {
    const hoveredDepartmentId = pathOr(0, ['target', 'dataset', 'itemId'], event);
    const hoveredDepartment =
      departments.find((department: ICategoryMenu) => department.id === hoveredDepartmentId.toString()) ??
      DEFAULT_CATEGORY;
    setSelectedDepartment(hoveredDepartment);
  };
  const onHover = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!isMobile) {
      setDepartmentBySelectedLink(event);
    }
  };
  const onClick: React.MouseEventHandler<HTMLElement> = (event) => {
    if (isMobile) {
      event.preventDefault();
      event.stopPropagation();
      setDepartmentBySelectedLink(event);
    }
  };
  return (
    <div data-category-menu-options-container>
      <div>
        <p>Entrega en: Medellín</p>
        <div data-category-menu-line></div>
      </div>
      <br />
      <div data-category-menu-departments>
        <List
          title={<>Categorías</>}
          items={departments}
          onHover={onHover}
          onClick={onClick}
          navigationIcon={<CaretRight size={20} color="gray" />}
        />
      </div>
    </div>
  );
};

export default MenuDepartments;
