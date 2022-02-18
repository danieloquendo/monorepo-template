import { useDropdown } from '../src/components/SearchByCategory/useDropdown';

describe('useSearchByCategory', () => {
  it('renders without crashing', () => {
    const { handleCloseDropdown, handleOpenDropdown, handleSelected, openDropdown, selected } = useDropdown();

    expect(handleOpenDropdown).toBeInstanceOf(Function);
    expect(handleCloseDropdown).toBeInstanceOf(Function);
    expect(handleSelected).toBeInstanceOf(Function);
    expect(selected).toBe('Petites');
    expect(openDropdown).toBe(false);
    expect(handleOpenDropdown()).toBe(true);
    expect(handleCloseDropdown()).toBe(false);
    expect(handleSelected('Petites')).toBe('Petites');
  });
});
