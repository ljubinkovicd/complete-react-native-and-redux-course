// Import a library to help create a component
import React from 'react';
// import ReactNative from 'react-native';
// Import destructuring
import { Text, View } from 'react-native';

// Create a component
// Function based component
const Header = props => {
  // style destructuring
  const { viewStyle, textStyle } = styles;

  // parent will provide headerText when passing the 'props' object.
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// Styling
const styles = {
  viewStyle: {
    backgroundColor: '#F8F800',
    justifyContent: 'center', // position elements in the VERTICAL DIRECTION.
    alignItems: 'center', // position elements in the HORIZONTAL DIRECTION.
    height: 60,
    paddingTop: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app.
export { Header }; // make it usable to other areas of our app.
