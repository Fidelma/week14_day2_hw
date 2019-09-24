import React from 'react';
import Song from './Song.js';

const SongList = (props) => {
  const songsNode = props.songs.map((song, index) => {
    return(
      <Song key={index} song={song} position={index + 1}/>
    )
  })
  const filteredSongs = props.filteredSongs.map((song, index) => {
    return(
      <Song key={index} song={song} position={index +1}/>
    )
  })

  return (
    <>
    <h1>UK Top 20</h1>
    {filteredSongs}
    {songsNode}
    </>
  );
}

export default SongList;
