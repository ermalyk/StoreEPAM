export const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const SHOW_CATEGORY_ITEMS = 'SHOW_CATEGORY_ITEMS';

export const setCategoryList = (categories) => ({
    type: SET_CATEGORY_LIST,
    categories
})

export const addCategory = (newCategory) => ({
    type: ADD_CATEGORY,
    newCategory
})

export const toggleCategory = (id, level) => ({
    type: TOGGLE_CATEGORY,
    id,
    level
})

export const showCategoryItems = (id) => ({
    type: SHOW_CATEGORY_ITEMS,
    id
})