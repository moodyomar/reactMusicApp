import React, { useEffect, useState } from 'react';
import SearchHeader from '../common/searchHeader';
import Songs from './songs';
import { API_URL } from '../services/apiSer';


function MusicApp(props){
let [songs_ar,setSongs_ar] = useState([]);
let [searchQ,setSearchQ] = useState("eminem");

  useEffect(() => {
    doApi();
  }, [searchQ])


  const doApi = async () => {
    let apiKey = "0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13"
    let url = `${API_URL}${apiKey}&q=${searchQ}`
    let resp = await fetch(url);
    let data = await resp.json()
    console.log(data.data);
    if (data.error) {
      doApi();
    } else {
      setSongs_ar(data.data);
    }
  }



  return(
    <div className="container">
      <div className="row">
      <SearchHeader searchQ={setSearchQ} />
      {songs_ar.map((item) => {
        return(
          <div className="col-md-4"  key={item.id}>

            <Songs item={item}/>
   </div>
        )
      } )}
    </div> 
    </div>
  )
}

export default MusicApp