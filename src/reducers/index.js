import { combineReducers } from 'redux';
import category from './category-reducers';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    category,
    routing: routerReducer
});

export default rootReducer;