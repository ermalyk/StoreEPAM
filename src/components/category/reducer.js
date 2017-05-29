import {
    SET_CATEGORY_LIST,
    ADD_CATEGORY,
    TOGGLE_CATEGORY,
    SHOW_CATEGORY_ITEMS
} from './actions';

let deepMapActiveCategory = (list, id, level, currentLevel) => {
    return list.map((category) => {
        // console.log('----------------------------------------------------');
        // // console.log('[category] = ', category);
        // console.log('[id] = ', id);
        // console.log('[category.id] = ', category.id);
        // console.log('----------------------------------------------------');
        // if (level === currentLevel && category.id && category.id === id) {
        if (category.id && category.id === id) {
            // console.log('first');
            return {...category, active: !category.active }
        }
        if (category.categories.length > 0) {
            // console.log('second');
            return {...category, categories: deepMapActiveCategory(category.categories, id, level, ++currentLevel) };
        }
        // console.log('third');
        return category;
    })
};

let deepMapGetItems = (categories, id) => {
    return categories.map((category) => {
        console.log('------------------------1----------------------------');
        // console.log('[category] = ', category);
        console.log('[id] = ', id);
        console.log('[category.id] = ', category.id);
        console.log('category', category);
        console.log('-------------------------2---------------------------');
        // if (level === currentLevel && category.id && category.id === id) {
        if (category.id && category.id === id) {
            console.log('first');
            console.log('category.items', category.items);
            return category.items;
        }
        if (category.categories.length > 0) {
            console.log('second');
            return deepMapActiveCategory(category.categories, id);
        }
        // console.log('third');
        return [];
    })
};

let getItemsForSelectedCategory1 = (categories, id) => {
    console.log('categories, id ', categories, id);
    let items = categories.find((category) => {
        if (category.id && category.id === id) {
            console.log('first');
            console.log('category', category);
            return category.items;
        }
        if (category.categories.length > 0) {
            console.log('second');
            getItemsForSelectedCategory(category.categories, id);
        }
    });

    if (items) return items.items;
    return [];
}

let getItemsForSelectedCategory2 = (categories, id) => {
    console.log('categories, id ', categories, id);
    let items = categories.find((category) => {
        if (category.id && category.id === id) {
            console.log('-------------------------------------');
            console.log('first');
            console.log('category', category);
            console.log('-------------------------------------');
            return category.id && category.id === id;
        }
        if (category.categories.length > 0) {
            console.log('-------------------------------------');
            console.log('second');
            console.log('category', category);
            console.log('-------------------------------------');
            getItemsForSelectedCategory(category.categories, id);
        }
    });

    if (items) return items.items;
    return [];
}

const getItemsForSelectedCategory = (categories, id) => {
    console.log('categories, id ', categories, id);
    var a = [];
    for (let category of categories) {
        if (category.id && category.id === id) {
            // console.log('-------------------------------------');
            // console.log('first');
            // console.log('category', category);
            // console.log('-------------------------------------');
            a = category.items;
            //return category.items;
            // return category.items;
        }
        if (category.categories.length > 0) {
            // console.log('-------------------------------------');
            // console.log('second');
            // console.log('category', category);
            // console.log('-------------------------------------');
            getItemsForSelectedCategory(category.categories, id);
        }
    }
    return a;
}


const getItemsForSelectedCategory22 = (categories, id, index) => {
    // for (let category of categories) {
    if (categories[index].id && categories[index].id === id) {
        console.log('1.categories[index]=', categories[index]);
        return categories[index].items || [];
    }
    if (categories[index].categories.length > 0) {
        console.log('2.categories[index]=', categories[index]);
        return getItemsForSelectedCategory22(categories[index].categories, id, index) || [];
    }
    if (categories.categories[index + 1]) {
        console.log('3.categories[index]=', categories[index]);
        return getItemsForSelectedCategory22(categories, id, index + 1) || [];
    }
    //return [];
    // }
}

// 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
//     return v.toString(16);
// });

export const reducer = (state = { list: [] }, action) => {
    switch (action.type) {
        case SET_CATEGORY_LIST:
            return {
                ...state.categories,
                list: action.categories
            }
        case ADD_CATEGORY:
            return {
                ...state,
                list: state.list.push(action.newCategory)
            }
        case TOGGLE_CATEGORY:
            // console.log('state', state);
            // console.log('state.list', state.list);
            // console.log('action.id', action.id);

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
            console.log('deepMapGetItems----------------========', b);

            let listShow = {};
            listShow.activeItems = getItemsForSelectedCategory22(state.list.categories, action.id, 0) || [];
            console.log('listShow.activeItems', listShow.activeItems);
            listShow.categories = state.list.categories;
            listShow.pressedId = action.id;

            return {
                ...state,
                list: listShow
            };
    }
    return state;
}