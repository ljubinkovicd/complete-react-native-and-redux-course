/** @format */

// Import a library to help create a component
import React from 'react';
// import ReactNative from 'react-native';

// Import destructuring
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';

// Custom import
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
// Function
// Component nesting
const App = () => (
  // root component (this will be shown on the device, displayed to the user)
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>

  // WILL NOT WORK!!!
  // <Header headerText={'Albumcici'} />
  // <AlbumList />
  // equivalent to
  // return 1
  // return 2
);

// Render it (the component) to the device
// Only the 'root' component uses 'AppRegistry'. // First arg must match the project name.
AppRegistry.registerComponent(appName, () => App);
