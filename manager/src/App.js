import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCZ9S_-FAd9Y0O87sNh36mYAoqf2nfEuPc',
      authDomain: 'rn-manager-a14d7.firebaseapp.com',
      databaseURL: 'https://rn-manager-a14d7.firebaseio.com',
      projectId: 'rn-manager-a14d7',
      storageBucket: '',
      messagingSenderId: '894972964555'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
