import React from 'react';
import { EventHook } from './types';
import useExitoEvents from './useExitoEvents';

const { event, useEvent } = useExitoEvents();

const ExitoEventsContext: React.Context<EventHook> = React.createContext<EventHook>({ event, useEvent });

export const ExitoEventsProvider: React.FC = ({ children }) => {
  return <ExitoEventsContext.Provider value={{ event, useEvent }}>{children}</ExitoEventsContext.Provider>;
};

export default ExitoEventsContext;
