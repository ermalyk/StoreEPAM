import { createStore } from 'redux';
import Constants from '../constants/constants.js';
import appReduser from '../reducers/category-reducers.js';

const store = createStore(appReduser);

store.dispatch({
    type: Constants.ADD_CATALOG,
    payload: {
        'id': 0
    }
});
