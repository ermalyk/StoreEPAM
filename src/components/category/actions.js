export const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';

export const setCategoryList = (categories) => ({
  type: SET_CATEGORY_LIST,
  categories
})

export const addCategory = (newCategory) => ({
  type: ADD_CATEGORY,
  newCategory
})

export const toggleCategory = (id) => ({
  type: TOGGLE_CATEGORY,
  id
})

