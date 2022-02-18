import React from 'react';
import { ICategoryMenu } from '../../types/CategoryMenu';
import List from '../LinkList';
interface IServicesProps {
  services: ICategoryMenu[];
}

const MenuServices: React.FC<IServicesProps> = (props) => {
  const { services } = props;
  return (
    <List
      items={services}
      title={
        <li>
          <p>Servicios</p>
        </li>
      }
    />
  );
};

export default MenuServices;
