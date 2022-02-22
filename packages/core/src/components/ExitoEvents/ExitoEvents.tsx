import React from 'react';
import { ExitoEventsProvider } from './ExitoEventsContext';

const ExitoEvents: React.FC = ({ children }) => {
  return <ExitoEventsProvider>{children}</ExitoEventsProvider>;
};

export default ExitoEvents;
