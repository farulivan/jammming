import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SearchResults/SearchResults'
import { Playlist } from '../Playlist/Playlist'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Hello',
          artist: 'Budi',
          album: 'DoReMi',
          id: '123'
        },
        {
          name: 'World',
          artist: 'Ani',
          album: 'FaSolLa',
          id: '456'
        },
        {
          name: 'Yeah...',
          artist: 'Adi',
          album: 'SiDo',
          id: '789'
        }
      ],
      playlistTracks: [
        {
          name: 'Hello11',
          artist: 'Budi',
          album: 'DoReMi',
          id: '123'
        },
        {
          name: 'World22',
          artist: 'Ani',
          album: 'FaSolLa',
          id: '456'
        },
        {
          name: 'Yeah...33',
          artist: 'Adi',
          album: 'SiDo',
          id: '789'
        }
      ],
      playlistName: 'Energic Monday'
    }
  }
  
  render(){
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName} />
        </div>
      </div>
    </div>
    )
  }
}

export default App;
