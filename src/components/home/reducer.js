import {
    ADD_CATEGORY
} from './actions';

export const reducer = (state = { list: [] }, action) => {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                list: [...state.list, action.newCategory]
            }
    }
    return state;
}
