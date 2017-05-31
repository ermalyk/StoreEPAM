import { combineReducers } from 'redux';
import { reducer as categoryReducer } from './components/category/reducer';
import { reducer as itemListReduser } from './components/toDoItem/reducer';
import { reducer as editItem } from './components/home/reducer';
// import { reducer as itemReducer } from './components/toDoItem/reducer';

export default combineReducers({
    categories: categoryReducer,
    itemList: itemListReduser,
    editItem: editItem
        // itemReducer
});
