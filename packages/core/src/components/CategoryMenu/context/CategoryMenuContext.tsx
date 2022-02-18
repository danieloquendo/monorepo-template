import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ICategoryMenu } from '../..';
import { DEFAULT_CATEGORY } from '../constants';

interface ICategoryMenuContext {
  departments: ICategoryMenu[];
  categories: ICategoryMenu[];
  subcategories: ICategoryMenu[];
  selectedDepartment: ICategoryMenu;
  setSelectedDepartment: React.Dispatch<React.SetStateAction<ICategoryMenu>>;
  selectedCategory: ICategoryMenu;
  setSelectedCategory: React.Dispatch<React.SetStateAction<ICategoryMenu>>;
  isMobile?: boolean;
  showDepartments: boolean;
  showCategories: boolean;
  showSubcategories: boolean;
  onDepartmentsAction: () => void;
  onCategoriesAction: () => void;
  onSubcategoriesAction: () => void;
  setDefaultDepartment: () => void;
  setDefaultCategory: () => void;
}

const DEFAULT_VALUE = {
  departments: [],
  categories: [],
  subcategories: [],
  selectedDepartment: DEFAULT_CATEGORY,
  setSelectedDepartment: () => null,
  selectedCategory: DEFAULT_CATEGORY,
  setSelectedCategory: () => null,
  isMobile: false,
  showDepartments: false,
  showCategories: false,
  showSubcategories: false,
  onDepartmentsAction: () => null,
  onCategoriesAction: () => null,
  setDefaultDepartment: () => null,
  setDefaultCategory: () => null,
  onSubcategoriesAction: () => null
};

interface ICategoryMenuProvider {
  menu: ICategoryMenu[];
  isMobile?: boolean;
}

const CategoryMenuContext = createContext<ICategoryMenuContext>(DEFAULT_VALUE);

const CategoryMenuProvider: React.FC<ICategoryMenuProvider> = ({ children, menu, isMobile }) => {
  /* Selected options */
  const [selectedDepartment, setSelectedDepartment] = useState<ICategoryMenu>(
    DEFAULT_VALUE.selectedDepartment
  );
  const [selectedCategory, setSelectedCategory] = useState<ICategoryMenu>(DEFAULT_VALUE.selectedCategory);

  /* Memoize departments, categories and subcategories */
  const departments = useMemo(() => menu?.filter((category) => (category.parent ? false : true)), [menu]);
  const categories = useMemo(
    () => menu?.filter((category) => category.parent === selectedDepartment.id),
    [menu, selectedDepartment]
  );
  const subcategories = useMemo(
    () =>
      menu?.filter((menuCategory) =>
        categories.find((category: ICategoryMenu) => category.id === menuCategory.parent)
      ),
    [menu, categories]
  );

  /* Show states */
  const [showDepartments, setShowDepartments] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showSubcategories, setShowSubcategories] = useState(false);

  const setDefaultDepartment = () => {
    setSelectedDepartment(DEFAULT_VALUE.selectedDepartment);
    setShowCategories(false);
  };
  const onDepartmentsAction = () => {
    setShowDepartments(!showDepartments);
  };

  const setDefaultCategory = () => {
    setSelectedCategory(DEFAULT_VALUE.selectedCategory);
    setShowSubcategories(false);
  };

  const onCategoriesAction = () => {
    setShowCategories(!showCategories);
  };

  const onSubcategoriesAction = () => {
    setShowSubcategories(!showSubcategories);
  };

  useEffect(() => {
    const show = selectedDepartment.id !== '0';
    setShowCategories(show);
  }, [selectedDepartment]);

  useEffect(() => {
    const show = selectedCategory.id !== '0';
    setShowSubcategories(show);
  }, [selectedCategory]);

  useEffect(() => {
    if (!showSubcategories) {
      setDefaultCategory();
    }
  }, [showSubcategories]);

  useEffect(() => {
    if (!showDepartments || !showCategories) {
      setDefaultDepartment();
      setDefaultCategory();
    }
  }, [showDepartments, showCategories]);

  return (
    <CategoryMenuContext.Provider
      value={{
        departments,
        categories,
        subcategories,
        selectedDepartment,
        setSelectedDepartment,
        selectedCategory,
        setSelectedCategory,
        isMobile,
        showDepartments,
        onDepartmentsAction,
        showCategories,
        showSubcategories,
        onCategoriesAction,
        onSubcategoriesAction,
        setDefaultDepartment,
        setDefaultCategory
      }}
    >
      {children}
    </CategoryMenuContext.Provider>
  );
};

export const useCategoryMenuContext = () => useContext(CategoryMenuContext);

export default CategoryMenuProvider;
