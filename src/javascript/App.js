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
    <div className="App">
    <img src="/cadets-logo.png" alt="The Cadets" className="cadets-logo"/>
      <hr className="line" />
    <h2 className="sub-header">Percussion Shorts Archive</h2>
      <hr className="line" />
      <div className="shorts-description" > <p className="tribute-message">A tribute to The Cadets Percussion section tradition of wearing matching shorts, symbolic of the members' unity as a team.</p></div>
      <hr className="line" />
      <div className="contact" > <p className="contact-message">To add missing years, send an email to anthonydandrea3@gmail.com</p></div>
    {Data.sort((i,j) => {if(i.year < j.year) return 1; else return -1}).map(obj => {
      return (
        <div className="color-row">
            <h1 className="year">{obj.year}</h1>

            <div className="shorts">
            {
              obj.primary_image ?
              <img className="primary-color-side" src={obj.primary_image} />
              : <div className="primary-color-side" style={{background: obj.primary_color}} />
            }
            {getSecondaryColorTags(obj)}
            </div>

        </div>
      )
    })}
    </div>
  );
}

export default App;
