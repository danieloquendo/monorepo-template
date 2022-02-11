import React from 'react';
import { ICategoryMenu } from '../../types/CategoryMenu';
interface IServicesProps {
  services: ICategoryMenu[];
}

const Services: React.FC<IServicesProps> = (props) => {
  console.log(props);
  return <div>Services</div>;
};

export default Services;
