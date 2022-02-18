import { useSearchByCategory } from '../src/components/SearchByCategory/useSearchByCategory';

const categories = [
  {
    node: {
      seo: {
        title: 'Petites'
      },
      remoteId: '2',
      slug: ''
    }
  }
];

const submitMockCallback = jest.fn((Petites1: string, Petites2: string) => ({ Petites1, Petites2 }));

describe('useSearchByCategory', () => {
  it('renders without crashing', () => {
    const {
      cat,
      selected,
      search,
      openDropdown,
      setSearch,
      handleOpenDropdown,
      handleCloseDropdown,
      busqueda,
      handleSelected
    } = useSearchByCategory({ categories, submit: submitMockCallback });

    expect(setSearch).toBeInstanceOf(Function);
    expect(handleOpenDropdown).toBeInstanceOf(Function);
    expect(handleCloseDropdown).toBeInstanceOf(Function);
    expect(busqueda).toBeInstanceOf(Function);
    expect(handleSelected).toBeInstanceOf(Function);
    expect(selected).toBe('Petites');
    expect(search).toBe('Petites');
    busqueda();
    expect(submitMockCallback.mock.calls.length).toBe(1);
    expect(setSearch).toBe('Petites');
    expect(openDropdown).toBe(false);
    expect(handleOpenDropdown()).toBe(true);
    expect(handleCloseDropdown()).toBe(false);
    expect(handleSelected('Petites')).toBe('Petites');
    expect(cat).toHaveLength(4);
    expect(cat).toMatchObject({
      title: 'Petites',
      remoteId: '2'
    });
  });
});
