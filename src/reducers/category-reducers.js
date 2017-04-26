import Constants from '../constants/constants.js';
import { combineReducers } from 'redux';

export const addNewCategory = (state, action) => {
    // if (action.type === Constants.ADD_CATEGORY) {
    //     return action.payload;
    // } else {
    //     return state;
    // }
    return 10;
};

// export const addNewItem = (state, action) => {
//     if (action.type === Constants.ADD_CATEGORY) {
//         return action.payload;
//     } else {
//         return state;
//     }
// };

// export const category = (state, action) => {
//     switch (action.type) {
//         case Constants.ADD_CATEGORY:
//             return [
//                 ...state,
//                 action.payload
//             ];
//         default:
//             return state;
//     }
// };

const singleReducer = combineReducers({
    addNewCategory,
    // addNewItem,
    // category
});

export default singleReducer;