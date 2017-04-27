import {
  SET_CATEGORY_LIST,
  ADD_CATEGORY,
  TOGGLE_CATEGORY
} from './actions';

export const reducer = (state = {}, action) => {
  switch(action.type) {
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
     return {
       ...state,
       list: state.list.map((category) => {
         if(category.id === action.id) {
           return { ...catgegory, active: !category.active}
         }
         return category;
        })
     }
  }
  return state;
}
