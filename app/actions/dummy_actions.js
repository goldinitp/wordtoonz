'use strict';

import request from 'superagent';
import Actions from '../constants/actions';

function getDummyApiSuccess(data){
	return {
		type: Actions.DUMMY_ACTION,
		data: data
	}
};

export function callDummyApi(data){

	return function(dispatch){

		return request.get('http://api.pearson.com/v2/dictionaries/entries?headword=game&audio=pronunciation').then(function(res){
			dispatch(getDummyApiSuccess(JSON.parse(res.text)));
		})
	}
}