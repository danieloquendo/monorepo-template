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
    const { cat, search, setSearch, busqueda } = useSearchByCategory({
      categories,
      submit: submitMockCallback
    });

    expect(setSearch).toBeInstanceOf(Function);
    expect(busqueda).toBeInstanceOf(Function);
    expect(search).toBe('Petites');
    expect(submitMockCallback.mock.calls.length).toBe(1);
    expect(setSearch).toBe('Petites');
    expect(cat).toHaveLength(4);
    expect(cat).toMatchObject({
      title: 'Petites',
      remoteId: '2'
    });
  });
});
