import React from 'react';
import NameInitials, { getInitials } from '../../src/components/NameInitials';

describe('<NameInitials />', () => {
  it('Component render', () => {
    expect(<NameInitials fullName="Juan Perez" />).toBeTruthy();
  });

  it('Get initials', () => {
    const initials = getInitials('Juan Perez');
    expect(initials).toEqual('JP');
  });
});
