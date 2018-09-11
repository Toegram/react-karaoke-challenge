import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  return (
    <div className="karaoke-display">
      <h2>Song Title</h2>
      <Lyrics lyrics={props.lyricsToDisplay} />
    </div>
  )
}

export default KaraokeDisplay;
