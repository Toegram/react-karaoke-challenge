import React from 'react';
import Song from './Song.js'

const SongList = (props) => {
  console.log("SONGLIST PROPS ARE: ", props);

  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {props.songs.map( song => {
          return (
           <Song
            key={song.id}
            song={song}
            handleLyrics={props.handleLyrics} />
          )
        }) }

      </tbody>
    </table>
  )
}

export default SongList;
