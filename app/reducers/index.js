import {routerReducer as routing} from 'react-router-redux';
import {createStore, combineReducers} from 'redux';

import dummyReducer from './dummyReducer';

export const finalReducer = combineReducers({
	routing,
	dummyReducer
});

const mainStore = createStore(finalReducer);

export default mainStore;