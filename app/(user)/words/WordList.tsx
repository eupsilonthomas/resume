
import React from "react";
import Link from 'next/link';
import { Word } from '../../../typings';
 
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const fetchWords = async() => { 
  const api = process.env.CHOLHKAN_API;
  const random = getRandomInt(8820);

  let options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${process.env.CHOLHKAN_TOKEN}` 
    },
  }   
   
  const res = await fetch(`${api}/chickasaw?limit=4&offset=${random}&`, options);
  const { data } = await res.json();
  const words: Word[] = data;
 
  return words;
}

const WordList:any=async() =>{
  const words = await fetchWords();
 
  return<>  
    {words.map((word) => (
    <Link href={`/words/${word._id}`}>
      <div key={word.word} className="text-xl bg-slate-300 card m-auto items-center hover:bg-teal-100 shadow-xl cardhov ">
        <div>{word.word[0]}</div>  
      </div> 
    </Link>
    ))}
    </>
}

export default WordList;