import React from 'react';
import { pathOr } from 'ramda';
import { ICategoryMenu } from '../../types/CategoryMenu';
import List from '../List';
import { CaretRight } from 'phosphor-react';

export interface IDepartmentsPops {
  setParentDepartment: (departmentId: ICategoryMenu) => void;
  departments: ICategoryMenu[];
}

function Departments(props: IDepartmentsPops) {
  const { setParentDepartment, departments } = props;
  const onHover = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const hoveredDepartmentId = pathOr(0, ['target', 'dataset', 'itemId'], event);
    console.log(event);
    console.log('hovered', hoveredDepartmentId);
    const hoveredDepartment = departments.find(
      (department: ICategoryMenu) => department.id === hoveredDepartmentId.toString()
    ) ?? { id: '0', name: 'default', href: '/', showIconLeft: false };
    setParentDepartment(hoveredDepartment);
  };
  return (
    <div data-category-menu-options-container>
      <section>
        <p>Entrega en: Medellín</p>
        <div data-category-menu-line></div>
      </section>
      <br />
      <div data-category-meu-departments>
        <List
          title={<>Categorías</>}
          items={departments}
          onHover={onHover}
          navigationIcon={<CaretRight size={20} color="gray" />}
        />
      </div>
    </div>
  );
}

export default Departments;
