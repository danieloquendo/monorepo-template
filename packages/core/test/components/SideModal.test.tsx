import React from 'react';
import SideModal from '../../src/components/SideModal';

describe('<SideModal />', () => {
  const defaultIconMock = <div>X</div>;

  it('Modal Render', () => {
    expect(
      <SideModal
        iconClose={defaultIconMock}
        iconHeader={defaultIconMock}
        modalTitle="Test Title"
        orientation="end"
      />
    ).toBeTruthy();
  });
});
