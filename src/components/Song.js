import React from 'react';
import './Song.css'

const Song = (props) => {
  return (
    <div className="song">
    <h5>Position: {props.position}</h5>
    <h5>Title: {props.song['im:name'].label}</h5>
    <h5>Artist: {props.song['im:artist'].label}</h5>
    <img src={props.song['im:image'][2].label} ></img>
    <hr/>
    </div>
  )
}

export default Song;
