import React, {Component} from 'react';
import SongList from '../components/SongList.js';
import GenreSelector from '../components/GenreSelector.js'

class ChartsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      top20: [],
      songsOfGenre: [],
    }
    this.handleGenreFilter = this.handleGenreFilter.bind(this);
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({top20: songs.feed.entry}))
    .catch(err => console.error)
  }

  handleGenreFilter(genre){
    const filteredSongs = [];
    this.state.top20.forEach((song) => {
      if(song.category.attributes.label == genre){
        filteredSongs.push(song);
      }
    })
    this.setState({songsOfGenre: filteredSongs})

  }

  render(){
    return(
      <>
        <GenreSelector songs={this.state.top20} handleGenreFilter={this.handleGenreFilter}/>

        <SongList songs={this.state.top20} filteredSongs={this.state.songsOfGenre} />
      </>
    )
  }

}

export default ChartsContainer;
