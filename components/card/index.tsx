
'use client';
import React, { useEffect, useState} from 'react';
require('../../styles/Home.module.scss');

import Modal  from '../modal/Modal';
import useModal from '../modal/useModal';
 
import { Container, Row, Col } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';
setConfiguration({ maxScreenClass: 'xl' });

type Word = {
  chikashshaWord: string | '';
  englishWord: string | '';
}

const Card: any=(props: { word: any; info: any; }): JSX.Element => {
  const [isStarred, setIsStarred] = useState(false);
  const [showTooltip, setTooltip] = useState(false);
  const [isFront, setFront] = useState(true);
  const { word, info } = props;
  const { isOpen, toggle } = useModal();
  const sourcePath = '/sounds/'; // create config in .env 
  const { sounds } = word;

  const showSoundTooltip = () =>{
    setTooltip(!showTooltip)
  };

  function handelClick() {  
    toggle();  
  }
 
  const setVolume = function(id:any,vol:any) {
    sounds[id].volume = vol; // vol between 0 and 1
  }

  function amplifyMedia(mediaElem:any, multiplier:any) {
    //var context = new (window.AudioContext || window.webkitAudioContext),
    var context = new (window.AudioContext),
        result = {
          context: context,
          source: context.createMediaElementSource(mediaElem),
          gain: context.createGain(),
          media: mediaElem,
          amplify: function(multiplier:any) { result.gain.gain.value = multiplier; },
          getAmpLevel: function() { return result.gain.gain.value; }
        };
    result.source.connect(result.gain);
    result.gain.connect(context.destination);
    result.amplify(multiplier);
    return result;
  }
  
  function playSound() {
    const sourcePath = '/sounds/'; // create config in .env 
    if(word.sounds && word.sounds[0]){
      const snd = new Audio(`${sourcePath}${word.sounds[0]}`);
      // do not go higher than 4, because it can damage speakers.
      snd.volume = 1;
      amplifyMedia(snd, 6);
      snd.play();  
      snd.currentTime=0;
    }
  }

  function handelCardClick() {
    setFront(!isFront);
  };

  function handelStarClick():boolean {
    word.isStarred = !word.isStarred;
    setIsStarred(word.isStarred);
    return word.isStarred;
  }
  
  useEffect(()=>{
    document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      // close modal here
      let button = document.getElementById('closeButton');
      if(button) {
        button.click();
      }
    }
  })
  },[isOpen])

  const getNotes = (word:any) => {
    const noteItems = word.notes.map((note:any, key:string) =>
      <div key={key}>{note.text}</div>
    );

    return noteItems;
  }

  const definitionsItems = word.definitions.map((definitions: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined, key: React.Key | null | undefined) => 
      <div key={key}>{definitions}</div>
  );

  const getSounds = (word:any, controls:any) => {
    const { sounds }  =  word; 

    if(sounds.length > 0) {
      return (
        <audio controls={controls} controlsList="nodownload" preload="none" aria-label="audio" >
        <source src={`${sourcePath}${word.sounds[0]}`} type="audio/mp4"/>
        <p>Your browser does not support HTML5 audio.</p>
        </audio>
      );
    }
  
    else if(sounds.length === 0) {
      // do not return anything
    }
  }

  const handleKeypress = (e: { keyCode: number; }) => {
    //it triggers by pressing the enter key should be 13 but it is not
  if (e.keyCode === 0 ) {
      handelClick();
    }
  };

  return ( 
    
    <div role="button" onClick={handelCardClick}  >
    <div className="">
     <div>
       <div className="m-2">
            { word.isStarred === true ? (
              <button aria-label={`deselect vocabulary word ${word.chikashshaWord}`} onClick={handelStarClick} className="float-right visible bg-transparent ...">
                <i className="material-star-selected">star</i>
              </button>
            ) : (
              <button aria-label={`select vocabulary word ${word.chikashshaWord}`} onClick={handelStarClick} className="float-right visible bg-transparent ...">
              <i className="material-star">star</i>
              </button>
            )
            }
       </div>
     </div>
      <div className="p-8 center"> 
        <div>
          <div className={isFront ? 'visible' : 'invisible'}>
            { isFront ? (<h2 className="text-3xl font-bold">{word.chikashshaWord}</h2> ) 
            :
            (<h2 className={'visible text-3xl font-bold'}>{word.definitions[0]}</h2>)
           }
          </div> 
        </div>
      </div>   
      <div >
        <div className="">
          {info ? (
            <button onClick={handelClick} className=" mt-10 float-right  bg-transparent ...">
              <i aria-label="vocabulary info" className="material-info  ...">more_horiz</i>
            </button>) 
            :
            (
              <button className=" mt-36 float-right  bg-transparent ...">
                <i aria-label="vocabulary info" className="invisible material-info ...">more_horiz</i>
              </button>) 
            }
        </div>
      </div>  
 </div>
   
      {isOpen ? (
        <Modal isOpen={isOpen} toggle={toggle} >
          <div className="text-xl">
            <div className="float-right">
              <button id="closeButton" aria-label="close"  onClick={toggle}><i className="close ">close</i></button>
            </div>
            <div  className="pt-8 text-2xl font-extrabold">
              <div className="">{word.chikashshaWord}</div>
            </div>
            <div> 
              <p className="m-2 "><span className="text-2xl font-extrabold italic">Humes :</span>  {word.humes}</p>
            </div> 
            <div className="m-2 p-1 "><div className="text-2xl font-extrabold italic">Part of Speech : {word.partOfSpeech}</div></div>
            <div className=" m-2  font-extrabold text-2xl italic">Notes :</div>
            <div className="m-2  bold">
              <div>{getNotes(word)}</div>
            </div>
            <div className="m-2  text-2xl font-extrabold italic">Usage :&nbsp;</div>
            <div className="m-2  text-2xl italic"> 
               {word.chikashshaUsage}
            </div>
            <div className="m-2  text-2xl font-extrabold italic">Definitions : </div>
            <div className="m-2  bold">
              <div>{definitionsItems}</div>
            </div>
           {word.sounds[0] ? (
            <div className="m-2 float-right"> 
              <button aria-label={`play word`}role="button" type="submit" tabIndex={0} onClick={playSound} className="play material-icons shadow-xl">
                  play_circle_filled
              </button>
            </div>): false}
          </div>
        </Modal>) : (false)
        }  
      </div>
  )}

export default Card;