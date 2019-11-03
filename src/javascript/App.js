import React from 'react';
import '../styles//App.css';

import Data from './Data'

function getPocketTags(obj) {
  if(obj.pocket_image) {
    return   <img className="pocket" src={obj.pocket_image} />
  } else {
    return <div className="pocket" style={{background: obj.primary_color}} />
  }
}

function getSecondaryColorTags(obj) {
  if(obj.secondary_image) {
    return (
      <div className="secondary-color-side">
      <img className="image-color" src={obj.secondary_image} />
      {getPocketTags(obj)}
      </div>
    )
  } else {
    return (
      <div className="secondary-color-side" style={{background: obj.secondary_color}}>
      {getPocketTags(obj)}
      </div>
    )
  }
}
function App() {
  return (
    <React.Fragment>
    <div className="App">
    <h1>Cadets Percussion Shorts</h1>
    {Data.sort((i,j) => {if(i.year < j.year) return -1; else return 1}).map(obj => {
      return (
        <React.Fragment>
        <div className="color-row">

        <div className="shorts">
        {
          obj.primary_image ?
          <img className="primary-color-side" src={obj.primary_image} />
          : <div className="primary-color-side" style={{background: obj.primary_color}} />
        }
        {getSecondaryColorTags(obj)}
        </div>

        <h1 className="year">{obj.year}</h1>

        </div>
        </React.Fragment>
      )
    })}
    </div>
    </React.Fragment>
  );
}

export default App;
