'use strict';

import React from 'react';
import Search from '../search';

const Home = () => (
	<div className="homeScreenWrapper">
	    <h1>Search</h1>
	    <Search />
	</div>
    // view port should cover screen with background image
    // search component will be on top of it
);

export default Home;
