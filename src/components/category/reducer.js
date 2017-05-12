import {
    SET_CATEGORY_LIST,
    ADD_CATEGORY,
    TOGGLE_CATEGORY
} from './actions';

let deepMap = (list, id, level, currentLevel) => {
    return list.map((category) => {
        console.log('----------------------------------------------------');
        console.log('[category] = ', category);
        console.log('[id] = ', id);
        console.log('----------------------------------------------------');
        if (level === currentLevel && category.id && category.id === id) {
            console.log('first');
            return {...category, active: !category.active }
        }
        if (category.categories.length > 0) {
            console.log('second');
            return {...category, categories: deepMap(category.categories, id, level, ++currentLevel)};
        }
        console.log('third');
        return category;
    })
};

let deepMap1 = (category, id) => {
    let finded = false;
    category.map((category) => {
        if (finded) return;
        console.log('----------------------------------------------------');
        console.log('[category] = ', category);
        console.log('[id] = ', id);
        console.log('----------------------------------------------------');
        if (category.id && category.id === id) {
            console.log('first');
            category.active = !category.active;
            finded = true;
        } else if (category.categories.length > 0) {
            console.log('second');
            deepMap(category.categories, id, finded);
        }
    })
    return category;
};

export const reducer = (state = {list: []}, action) => {
    switch (action.type) {
        case SET_CATEGORY_LIST:
            return {
                ...state,
                list: action.categories
            }
        case ADD_CATEGORY:
            return {
                ...state,
                list: state.list.push(action.newCategory)
            }
        case TOGGLE_CATEGORY:

            console.log('state.list', state.list);
            console.log('action.id', action.id);

            let a = deepMap(state.list, action.id, action.level, 0);
            console.log('a', a);
            return {
                ...state,
                list: a
            };
            // return {
            //     ...state,
            //     list: state.list.map((category) => {
            //         if (category.id === action.id) {
            //             return {...catgegory, active: !category.active }
            //         }
            //         return category;
            //     })
            // }
    }
    return state;
}
