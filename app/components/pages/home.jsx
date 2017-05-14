'use strict';

import React from 'react';
import {connect} from 'react-redux';
import Search from '../search';
import {callDummyApi} from '../../actions/dummy_actions';

function mapDispatchToProps(dispatch){
	return {
		inititalDataCall: function(){
			dispatch(callDummyApi());
		}
	}
}

class Home extends React.Component{

	getData(){
		this.props.inititalDataCall()
	}

	render(){

		return (
			<div className="homeScreenWrapper">
			    <h1>Search</h1>
			    <Search />
			    <button onClick={this.getData.bind(this)}>Get Data</button>
			</div>
		)
	}
}

export default connect(null, mapDispatchToProps)(Home);
