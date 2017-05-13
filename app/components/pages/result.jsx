'use strict';

import React from 'react';
import Search from '../search';
import Signin from '../signin_signup';

const Result = () => (
	<div className="homeScreenWrapper">
	    <h1>Result</h1>
	    <Search />
	    <div className="result-wrapper"> 
	    	your serach result:
	    	 lorem ipsum
	    </div>
	    <Signin />
	</div>
    // view port should cover screen with background image
    // search component will be on top of it
);

export default Result;
