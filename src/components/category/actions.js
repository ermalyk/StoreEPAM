export const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const SHOW_CATEGORY_ITEMS = 'SHOW_CATEGORY_ITEMS';
export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const ADD_SUB_CATEGORY = 'ADD_SUB_CATEGORY';

export const setCategoryList = (categories) => ({
    type: SET_CATEGORY_LIST,
    categories
})

export const addCategory = (newCategoryTitle) => ({
    type: ADD_CATEGORY,
    newCategoryTitle
})

export const addSubCategory = (newSubCategoryTitle, categoryId) => ({
    type: ADD_SUB_CATEGORY,
    categoryId,
    newSubCategoryTitle
})

export const editCategory = (id, newCategoryTitle) => ({
    type: EDIT_CATEGORY,
    id,
    newCategoryTitle
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

export const addNewItem = (categoryId, title) => ({
    type: ADD_NEW_ITEM,
    categoryId,
    titleItem
})
