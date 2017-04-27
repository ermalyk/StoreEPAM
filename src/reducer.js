import { combineReducers } from 'redux';
import { reducer as categoryReducer } from './components/category/reducer';
// import { reducer as itemReducer } from './components/toDoItem/reducer';

export default combineReducers({
    categories: categoryReducer
    // itemReducer
});
