import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

const URL = 'http://localhost:4000/songs'

class KaraokeContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      songs: [],
      lyricsToDisplay: '',
      searchTerm: '',
      filteredSongs: []
    }

  }

  componentDidMount(){
    fetch(URL)
    .then( res => res.json() )
    .then( data => this.setState({ songs: data }) )
  }

  handleLyrics = (lyrics) => {
    this.setState({
      ...this.state,
      lyricsToDisplay: lyrics
    })
  }

  handleSearch = (term) => {
    this.setState({
      ...this.state,
      searchTerm: term
    })
  }

  handleFilter = () => {
    if (this.state.searchTerm === '' ) {
      return this.state.songs
    } else {
      this.setState({
        ...this.state,
        filteredSongs: this.state.songs.filter( song => {
          return song.title.includes(this.state.searchTerm)
        })
    })
    return this.state.filteredSongs
  }
}

  render() {
    console.log("this.state.term:", this.state.searchTerm);
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleSearch={this.handleSearch}/>
          <SongList
            songs={this.handleFilter()} handleLyrics={this.handleLyrics}/>
        </div>
        <KaraokeDisplay lyricsToDisplay={this.state.lyricsToDisplay}/>
      </div>
    );
  }
}

export default KaraokeContainer;
