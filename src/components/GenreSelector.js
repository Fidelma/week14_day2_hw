import React from 'react';

const GenreSelector = (props) => {
  const genres = [];
  props.songs.forEach((song) => {
    if(!genres.includes(song.category.attributes.label)){
      genres.push(song.category.attributes.label)
    }
  })
  const options = genres.map((genre, index) => {
  return (
    <option value={index} key={index}>{genre}</option>
  )
})

function handleChange(event){
  props.handleGenreFilter(genres[event])

}

return(
  <select
  id="genre-selector"
  defaultValue="default"
  onChange={handleChange}>
  <option disabled value="default">All</option>
  {options}
  </select>
  );

}

export default GenreSelector;
