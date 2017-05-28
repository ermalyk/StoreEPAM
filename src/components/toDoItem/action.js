export const SET_ITEM_LIST = 'SET_ITEM_LIST';
export const ADD_ITEM = 'ADD_ITEM';

export const setCategoryList = (items) => ({
    type: SET_ITEM_LIST,
    items
});

export const addItem = (item) => ({
    type: ADD_ITEM,
    item
});