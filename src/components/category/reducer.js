import {
    SET_CATEGORY_LIST,
    ADD_CATEGORY,
    EDIT_CATEGORY,
    ADD_SUB_CATEGORY,
    TOGGLE_CATEGORY,
    SHOW_CATEGORY_ITEMS,
    ADD_NEW_ITEM
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
            return deepMapGetItems(category.categories, id);
        }
        return [];
    })
};

let deepMapPutNewSubCategory = (categories, id, newSubCategory) => {
    return categories.map((category) => {
        if (category.id && category.id === id) {
            let newCategories = [...category.categories];
            newCategories.push(newSubCategory);
            return { ...category, categories: newCategories };
        }
        if (category.categories.length > 0) {
            return { ...category, categories: deepMapPutNewSubCategory(category.categories, id, newSubCategory)};
        }
        return category;
    })
};

let deepMapEditCategory = (list, id, categoryName) => {
    return list.map((category) => {
        if (category.id && category.id === id) {
          console.log(categoryName);
            return {...category, title: categoryName }
        }
        if (category.categories.length > 0) {
            return {...category, categories: deepMapEditCategory(category.categories, id, categoryName) };
        }
        return category;
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
                list: {...state.list, categories, pressedId: newId}
            }
        case ADD_SUB_CATEGORY:
            let newId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
                let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
            let newSubCategory = {
                "id": newId,
                "pressed": true,
                "title": action.newSubCategoryTitle,
                "active": false,
                "categories": [],
                "items": []
            };

            return {
                ...state,
                list: {...state.list, categories: deepMapPutNewSubCategory(state.list.categories, action.categoryId, newSubCategory)}
            }
        case EDIT_CATEGORY:
            console.log('edit category', action.id);

            // let categoriesDuplicate = [...state.list.categories];

            return {
                ...state,
                list: {...state.list, categories: deepMapEditCategory(state.list.categories, action.id, action.newCategoryTitle)}
            }
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
