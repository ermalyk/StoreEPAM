import { combineReducers } from 'redux';
import categoryRedusers from './category-reducers';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    categoryRedusers,
    routing: routerReducer
});

export default rootReducer;