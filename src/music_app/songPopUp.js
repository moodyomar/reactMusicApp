import React from 'react';
import '../css/popUp.css'

function SongPopUp(props){
  let artistImage = props.item.artist.picture_medium
  return(
    <div className="outterPopUp" onClick={props.songPopUp}>
      <div className="innerPopUp">
        <div className="content">
          <div className="img" style={{backgroundImage:`url(${artistImage})`}}></div>
          <h2>{props.item.title}</h2>
          <audio controls>
  <source src={props.item.preview} type="audio/mpeg" />
Your browser does not support the audio element.
</audio>
        </div>
      </div>
    </div>
  )
}

export default SongPopUp