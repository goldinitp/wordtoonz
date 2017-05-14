import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { auth, googleAuthProvider } from '../firebase/firebase';
import { browserHistory } from 'react-router';

class LoginRequired extends Component {
  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      if(!currentUser) {
        browserHistory.push('/login');
      }
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default LoginRequired;
