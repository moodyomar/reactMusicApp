import React, { useState } from 'react';
import '../css/songs.css'
import SongPopUp from './songPopUp';
function Songs(props) {
  let [popUp, setPopUp] = useState(false)

  const songPopUp = () => {
    setPopUp(!popUp)
  }

  return (
    <div className="d-flex justify-content-center " >
      { popUp &&
        <SongPopUp item={props.item} songPopUp={songPopUp} />
      }
      <div className="card center songCard p-2 my-2 song" onClick={songPopUp}>
        <img src={props.item.album.cover_medium} alt="" className="imgClass" />
        <div className="moare">
          <h3>{props.item.artist.name} <br />- <br /> <small>{props.item.title}</small></h3>
          <div className="actions">
            <i className="fa fa-play-circle fa-4x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Songs

// [0].artist.name
// [0].artist.picture
// [0].album.title
// [0].album.cover
// [0].title (song)
// [0].duration
// [0].preview (mp3)
// [0].rank
