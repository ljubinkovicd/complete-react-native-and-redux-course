import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCTmAWfr0LNgdVtSRFk-SNxLnMw-ubAAoA',
      authDomain: 'rn-authentication-f7dc6.firebaseapp.com',
      databaseURL: 'https://rn-authentication-f7dc6.firebaseio.com',
      projectId: 'rn-authentication-f7dc6',
      storageBucket: 'rn-authentication-f7dc6.appspot.com',
      messagingSenderId: '253404273055'
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
