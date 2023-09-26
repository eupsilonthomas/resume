'use client';
import React ,{ useState, useEffect} from "react";
import Link from 'next/link';
import { Word } from '../../../typings';
import { useGlobalContext } from '../../Context/store';
 
const fetchRandomWords = (count) => {
  return [];
}

const ButtonMore:any= async() =>{
  const { words, setWords, data, setData } = useGlobalContext();

  const getNewWords = async(e, el) => {
    e.preventDefault();
    if(el) {
    //let wds = await fetchRandomWords(4);
      // this is how you would do this if you wanted to do
      // it from context. client component.  You would need 
      // and /api/endpoint to fetch the newer words.
      //setWords(wds);
      window.location.replace('/words');
    }
  }
  
  return<>  
    <button className="button-more " onClick={e=> getNewWords(e,true)}>Get More Words</button> 
  </>
}

export default ButtonMore;

 
  
 
 