import React from 'react';
import { Event, EventHook } from './types';

const useExitoEvents = (): EventHook => {
  const defaultValues = { eventName: '', eventData: {} };

  const [event, useEvent] = React.useState<Event>(defaultValues);

  return { event, useEvent };
};

export default useExitoEvents;
