// import {
//     SET_ITEM_LIST,
//     ADD_ITEM
// } from './actions';

// 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
//     return v.toString(16);
// });

// export const reducer = (state = { list: [] }, action) => {
//     switch (action.type) {
//         case SET_ITEM_LIST:
//             return {
//                 ...state,
//                 list: action.categories
//             }
//         case ADD_ITEM:
//             return {
//                 ...state,
//                 list: state.list.push(action.newCategory)
//             }
//             // return {
//             //     ...state,
//             //     list: state.list.map((category) => {
//             //         if (category.id === action.id) {
//             //             return {...catgegory, active: !category.active }
//             //         }
//             //         return category;
//             //     })
//             // }
//     }
//     return state;
// }