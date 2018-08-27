// Import a library to help create a component.
import React, { Component } from 'react';
// Import destructuring
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Create a component.
// Class based component
class AlbumList extends Component {
  state = {
    albums: []
  };

  // Lifecycle methods.
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
      response =>
        // triggers render()
        this.setState({ albums: response.data }) // setState updates the component's state
    );
  }

  componentDidMount() {
    console.log('componentDidMount called in AlbumList');
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  // render() returns some amount of JSX
  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

// Make the component available to other parts of the app.
export default AlbumList; // make it usable to other areas of our app.
