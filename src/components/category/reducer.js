import {
    SET_CATEGORY_LIST,
    ADD_CATEGORY,
    TOGGLE_CATEGORY
} from './actions';

let deepMap1 = (list, id) => {

    return list.map((category) => {
        console.log('----------------------------------------------------');
        console.log('[category] = ', category);
        console.log('[id] = ', id);
        console.log('----------------------------------------------------');
        if (category.id && category.id === id) {
            console.log('first');
            // return {...category, active: !category.active }
        }
        if (category.categories.length > 0) {
            console.log('second');
            deepMap(category.categories, id);
        }
        console.log('third');
        return category;
    })
};

let deepMap = (category, id) => {
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

export const reducer = (state = {}, action) => {
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
            let newState = {...state };

            let a = deepMap(newState.list, action.id);
            console.log('a', a);
            return {
                ...state,
                ...a
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