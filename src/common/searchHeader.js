import React from 'react';

function SearchHeader(props){
  let searchQ = React.createRef()

const onSearch = () => { 

  props.searchQ(searchQ.current.value)
  
}

  return(
    <div className="container-fluid hero d-flex justify-content-center
align-items-center mb-5" style={{backgroundImage:`url('/images/bg2.jpg')`}}>
    <div className="col-md-6 flex-column">
        <h3 className="text-center text-white txtShadow">Some title comes here later on</h3>
        <div className="d-flex mt-5">
            <input ref={searchQ} type="text" className="form-control" placeholder="Search a song..." />
            <button onClick={onSearch} className="btn btn-primary ms-2">Search</button>
        </div>
    </div>
</div>
  )
}

export default SearchHeader