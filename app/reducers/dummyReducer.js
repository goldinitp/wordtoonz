'use strict';

import Actions from '../constants/actions';

let dummyReducer = function(state = {},action){

	switch(action.type){
		case Actions.DUMMY_ACTION:
			return Object.assign({}, state, action.data);
		default: return state;
	}
};

export default dummyReducer;