import React from 'react';

export interface Event {
  eventName: string;
  eventData:
    | {
        [key: string | number | symbol]: unknown;
      }
    | Array<unknown>;
}

export interface EventHook {
  event: Event;
  useEvent: React.Dispatch<React.SetStateAction<Event>>;
}
