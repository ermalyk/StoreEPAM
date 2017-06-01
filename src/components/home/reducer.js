import {
    ADD_CATEGORY
} from './actions';

export const reducer = (state = { list: [] }, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            let newId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
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
            console.log(state);
            console.log('newCategory = ', newCategory);
            let categories = state.list.categories;
            categories.push(newCategory);
            console.log(categories);
            return {
                ...state,
                list: {...state.list, categories}
            }
    }
    return state;
}

// 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
//     return v.toString(16);
// });
