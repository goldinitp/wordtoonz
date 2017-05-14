'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { auth, googleAuthProvider } from '../firebase/firebase';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser : null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      this.setState({ currentUser });
    });
  }

  render() {
    const {currentUser} = this.state;
    return (
      <div>
        {currentUser && <div>
            Signed In
            <button onClick={() => auth.signOut()}> SignOut </button>
          </div>}
        {!currentUser && <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
            SignIn
          </button>}
      </div>
    );
  }
}

export default Signin;
