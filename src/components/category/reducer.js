import {
    SET_CATEGORY_LIST,
    ADD_CATEGORY,
    TOGGLE_CATEGORY,
    SHOW_CATEGORY_ITEMS,
    ADD_NEW_ITEM,
    EDIT_CATEGORY
} from './actions';

let deepMapActiveCategory = (list, id, level, currentLevel) => {
    return list.map((category) => {
        if (category.id && category.id === id) {
            return {...category, active: !category.active }
        }
        if (category.categories.length > 0) {
            return {...category, categories: deepMapActiveCategory(category.categories, id, level, ++currentLevel) };
        }
        return category;
    })
};

let deepMapGetItems = (categories, id) => {
    return categories.map((category) => {
        if (category.id && category.id === id) {
            return category.items;
        }
        if (category.categories.length > 0) {
            return deepMapActiveCategory(category.categories, id);
        }
        return [];
    })
};

const getItemsForSelectedCategory = (categories, id, res) => {
    for (let category of categories) {
      if (category.id && category.id === id) {
          res = res.concat(category.items);
          res = res.filter(function(n){ return n != undefined });
          return res;
      }
      if (category.categories.length > 0) {
          res = getItemsForSelectedCategory(category.categories, id, res);
          res = res.filter(function(n){ return n != undefined });
      }
    }
    res = res.filter(function(n){ return n != undefined });
    return res;
}

export const reducer = (state = { list: [] }, action) => {
    switch (action.type) {
        case SET_CATEGORY_LIST:

            return {
                ...state.categories,
                list: action.categories
            }
        case ADD_CATEGORY:
            let newId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
            let newCategory = {
                "id": newId,
                "pressed": true,
                "title": action.newCategoryTitle,
                "active": false,
                "categories": [],
                "items": []
            };
            let categories = [...state.list.categories];
            categories.push(newCategory);
            return {
                ...state,
                list: {...state.list, categories}
            }
        case EDIT_CATEGORY:
            console.log('edit category', action.id);
            break;
            // return {
            //     ...state,
            //     list: {...state.list, categories}
            // }
        case ADD_NEW_ITEM:

            return {
                ...state,
                list: {...state.list, categories}
            }
        case TOGGLE_CATEGORY:
            let a = deepMapActiveCategory(state.list.categories, action.id, action.level, 0);
            let list = {};
            list.categories = a;
            list.pressedId = state.list.pressedId;
            list.activeItems = state.list.activeItems;

            return {
                ...state,
                list
            }
        case SHOW_CATEGORY_ITEMS:

            let b = deepMapGetItems(state.list.categories, action.id);

            let listShow = {};
            listShow.activeItems = getItemsForSelectedCategory(state.list.categories, action.id, []) || [];
            listShow.categories = state.list.categories;
            listShow.pressedId = action.id;

            return {
                ...state,
                list: listShow
            };
    }
    return state;
}
