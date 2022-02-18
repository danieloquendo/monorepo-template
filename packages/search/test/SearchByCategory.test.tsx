import React from 'react';
import SearchByCategory from '../src/components/SearchByCategory';
import { Dropdown } from '../src/components/SearchByCategory/Dropdown';

describe('SearchByCategory', () => {
  it('renders without crashing', () => {
    expect(
      <SearchByCategory
        submit={() => {
          'Petites2';
        }}
        categories={[
          {
            node: {
              seo: {
                title: 'Petites'
              },
              remoteId: '2',
              slug: ''
            }
          }
        ]}
      />
    ).toBeTruthy();
  });
});

describe('Dropdown', () => {
  it('renders without crashing', () => {
    expect(
      <Dropdown
        categories={[{ title: 'Petites', remoteId: '2' }]}
        openDropdown={false}
        handleCloseDropdown={() => false}
        handleOpenDropdown={() => true}
        handleSelected={() => 'Petites'}
      />
    ).toBeTruthy();
  });
});
