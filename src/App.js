import './App.css';
import React, { useState, useEffect } from 'react';


// Components
const App = () => {
  return (
    <div className="App">
      <div className=' container'>
        <DrumMachine /> 
      </div>
    </div>
  );
}

export default App;

const DrumMachine = () => {

  const [text, setText] = useState('');
  const [volume, setVolume] = useState(0.5);

//each audios are listed as objects in one array
 const Audios = [

  {
    audio: 'Heater1',
    key: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    keyCode: 81
  },

  {
    audio: 'Heater2',
    key: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    keyCode: 87
  },

  {
    audio: 'Heater3',
    key: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    keyCode: 69
  },

  {
    audio: 'Heater4',
    key: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    keyCode: 65
  },

  {
    audio: 'Clap',
    key: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    keyCode: 83
  },

  {
    audio: 'Open-HH',
    key: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    keyCode: 68
  },
  
  {
    audio: 'Kick-n-Hat',
    key: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    keyCode: 90
  },

  {
    audio: 'Kick',
    key: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    keyCode: 88
  },

  {
    audio: 'Closed-HH',
    key: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    keyCode: 67
  },
 ]


  //bind key to their respective audio using addEventListener
useEffect( () => {
  document.addEventListener("keydown", keyPressed);
  return () => {document.removeEventListener("keydown", keyPressed)}
  
}
)

// function for binding key to respective audio
const keyPressed = (event) => {
  
  Audios.map((item) => {
    if (event.keyCode === item.keyCode) {
      var audio = document.getElementById(item.key);
      audio.currentTime = 0;
      audio.volume = volume;
      setText(item.audio);
      document.getElementById(item.audio).classList.add('active');
      setTimeout(() => document.getElementById(item.audio).classList.remove('active'), 200);
      audio.play();
    }
    return keyPressed;
  })
}

// function for changing volume
const changeVolume = (event) => {
  setVolume(event.target.value/100);
}

// function to setup the drumpads with respective audio
const setupDrumPads = (item) => {
  return <div id={item.audio} className={`drum-pad`} onClick={() => {
    var audio = document.getElementById(item.key);
    audio.currentTime = 0;
    audio.volume = volume;
    setText(item.audio);
    document.getElementById(item.audio).classList.add('active');
    setTimeout(() => document.getElementById(item.audio).classList.remove('active'), 200);
    audio.play();
  }}>{item.key}<audio className='clip' id={item.key} src={item.url}></audio></div>
}

  return (
      <div id='drum-machine'>
        <div id='display'>
          <div className='row'>
            {Audios.map(setupDrumPads)}
          </div>
          <div id='inner-text'>{text}</div>
          <div>
          <input id='volume' type='range' onChange={changeVolume}></input>
          </div>
          <p id='name'>By Ammarul</p>
          <a id='source-code' href='https://github.com/mrlzchry/drum-machine'>Source Code</a>
        </div>
      </div>
  )
}
