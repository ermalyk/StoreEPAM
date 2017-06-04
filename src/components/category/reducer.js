import {
    SET_CATEGORY_LIST,
    ADD_CATEGORY,
    EDIT_CATEGORY,
    ADD_SUB_CATEGORY,
    TOGGLE_CATEGORY,
    SHOW_CATEGORY_ITEMS,
    ADD_NEW_ITEM,
    DELETE_CATEGORY,
    CHANGE_STATE_ITEM
} from './actions';

const deepMapActiveCategory = (list, id, level, currentLevel) => {
    return list.map((category) => {
        if (category.id && category.id === id) {
            return {...category, active: !category.active };
        }
        if (category.categories.length > 0) {
            return {...category, categories: deepMapActiveCategory(category.categories, id, level, ++currentLevel) };
        }
        return category;
    })
};

const deepMapGetItems = (categories, id) => {
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

const deepMapPutNewSubCategory = (categories, id, newSubCategory) => {
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

const deepMapDeleteCategory2 = (list, id, level, currentLevel) => {
    return list.map((category) => {
        if (category.id && category.id === id) {
            return {...category, active: !category.active };
        }
        if (category.categories.length > 0) {
            return {...category, categories: deepMapActiveCategory(category.categories, id, level, ++currentLevel) };
        }
        return category;
    })
};

const deepMapDeleteCategory = (categories, id) => {
    return categories.filter((category) => {
        if(category.id && category.id === id) {
            console.log('false!!!');
            return false;
        }
        if (category.categories.length > 0) {
            console.log('true!!!');
            return deepMapDeleteCategory(category.categories, id);
        }
        console.log('true again!!!');
        return true;
    })
};

const deleteCategory = (categories, id, res) => {
    for (let category in categories) {
      if (categories[category].id && categories[category].id === id) {
          categories.splice(category, 1);
          return res;
      }
      if (categories[category].categories.length > 0) {
          res = getItemsForSelectedCategory(categories[category].categories, id, res);
          res = res.filter(function(n){ return n != undefined });
      }
    }
    res = res.filter(function(n){ return n != undefined });
    return res;
}

const deepMapItemChengeCheckbox = (listItems, id, item) => {
    return listItems.map((category) => {
        if (category.id && category.id === id ) {
            let currentItems = {...category.items};
            for(let currentItem of currentItems) {
                if(currentItem.id === item.id) {
                  currentItem.checked = !currentItem.checked;
                }
            }
            console.log('currentItems = ', currentItems);
            return {...category, items: currentItems };
        }
        if (category.categories.length > 0) {
            return {...category, categories: deepMapActiveCategory(category.categories, id, level, ++currentLevel) };
        }
        return category;
    })
};

const deepMapPutNewToDoItem = (categories, id, newItem) => {
    return categories.map((category) => {
        if (category.id && category.id === id) {
            let addNewItems = [...category.items];
            addNewItems.push(newItem);

            return { ...category, items: addNewItems };
        }
        if (category.categories.length > 0) {
            return { ...category, categories: deepMapPutNewSubCategory(category.categories, id, newItem)};
        }
        return category;
    })
};

const deepMapEditCategory = (list, id, categoryName) => {
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

const returnUID = () => {
  let newId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
  return newId;
}

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
            let newCategoryID = returnUID();
            let newCategory = {
                "id": newCategoryID,
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
                list: {...state.list, categories, pressedId: newCategoryID}
            }
        case ADD_SUB_CATEGORY:
            let newSubCategory = {
                "id": returnUID(),
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
        case DELETE_CATEGORY:
            console.log('delete category = ', state.list.categories, action.categoryId);
            // let categoriesAfterDelete = [...state.list.categories];
            // categoriesAfterDelete.push(newCategory);
            let firstParent = [...state.list];
            let hoho = deepMapDeleteCategory(state.list.categories, action.categoryId);
            console.log('hoho = ', hoho);
            return {
                ...state,
                list: {...state.list, categories: hoho}
            }
        case EDIT_CATEGORY:
            console.log('edit category', action.id);

            // let categoriesDuplicate = [...state.list.categories];

            return {
                ...state,
                list: {...state.list, categories: deepMapEditCategory(state.list.categories, action.id, action.newCategoryTitle)}
            }
        case ADD_NEW_ITEM:
            let newItem = {
                "id": returnUID(),
                "checked": false,
                "title": action.titleItem,
                "categories": []
            };
            let newActiveItems = [...state.list.activeItems];
            newActiveItems.push(newItem);
            return {
                ...state,
                list: {...state.list, categories: deepMapPutNewToDoItem(state.list.categories, action.categoryId, newItem), activeItems: newActiveItems}
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
        case CHANGE_STATE_ITEM:
        console.log(`change State Of Checked Item = ${action.categoryId} ; ${action.item}`);
        let aaa = deepMapItemChengeCheckbox(state.list.categories, action.categoryId, action.item);
        console.log('aaa = ', aaa);
        //
        // return {
        //   ...state.items, item
        // }
        break;
    }
    return state;
}
