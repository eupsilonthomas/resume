import React from "react";
import Link from 'next/link';
import { Word } from '../../../typings';
 

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const fetchWords = async() => {
  // random timeout for number of seconds for suspense demo
  const timeout = Math.floor(Math.random() * 8 + 2) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));
  const api = process.env.CHOLHKAN_API;
  const random = getRandomInt(8820);

  let options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${process.env.CHOLHKAN_TOKEN}` 
    },
  }   
   
  const res = await fetch(`${api}/chickasaw?limit=5&offset=${random}&`, options);
  const { data } = await res.json();
  const words: Word[] = data;
 
  return words;
}

const WordList:any=async() =>{
  const words = await fetchWords();

  return <>
    {words.map((word) => (
      <li key={word._id} className="list-none">
        <ul className="p-2 m-2 text-2xl hover:underline">
          <Link href={`/words/${word._id}`}>{word.word[0]}</Link>
        </ul>  
      </li>
    ))}
  </>
}

export default WordList;