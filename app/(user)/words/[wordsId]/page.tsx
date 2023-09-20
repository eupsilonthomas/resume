 
import React from "react";
//import { Word } from '../../../../typings';
import { notFound } from 'next/navigation';
import Card from '../../../../components/card';
import Cards from '../Cards';
//import { Container, Row, Col } from 'react-grid-system';
 
// toggle cache if you want to get server side render every time...
export const dynamicParams = true;

type PageProps = {
  params: {
    _id: string | '64387d3084b74db82ea316e4';
  }
}

type Word = {
  word: Array<string> | [];
  gloss: Array<string> | [];
  _id: string;
}

 
const fetchWord = async( _id: string) => {
  let options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${process.env.CHOLHKAN_TOKEN}` 
    },
    next: {revalidate: 60} 
  }
  console.log('here is the id', _id);
  // force-cache == static page
  // no-cache == no cache
  // ISG - static generation, not here
  // ISR === const res = await fetch(url, { next: {revalidate: 60} }
  // const res = await fetch(url, {cache: ''});

  // you do need isr, so revalidate or your page will be static
  const res = await fetch(`${process.env.CHOLHKAN_API}/chickasaw/${_id}`,options);
  //const res = await fetch(url, { next: {revalidate: 60} });
  const { data } = await res.json();
  const word = data;
  console.log('Word...........', word)
  return word;
}


async function WordPage ({params: { _id }}: PageProps) {

  console.log('......in the wordpage here is the id:' , _id)

  const data = await fetchWord(_id);
  let word = data;
 
  if(!word) return notFound();
   //return the fragment or the server side parts will be gone
  return (
    <>
      <Cards words={word}/>
    </>
  )
}

export default WordPage; 
// this is telling it to generate all of the pages :)
// GENERATE STATIC PARAMS
 
export async function generateStaticParams(){
  //console.log('GENERATING STATIC PARAMS NOW')
  let options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${process.env.CHOLHKAN_TOKEN}` 
      },
  }

  let url = `${process.env.CHOLHKAN_API}/chickasaw?limit=10`;
  const res = await fetch(url,options);
  const { data } = await res.json();
  const words: Word[] = data;

  //[{todoId: '1'}, {todoId: '2'}......]
  // network request limited to probably 50 requests
  // go up to 10 pages because of the rate limiter

  //const trimmedExercises = exercises.splice(0,10);
  const trimmedExercises = words;
   
  
  // you can make it bigger or all for prod probably
  // if you go to 15 for example, that is not statically generated
  // then it will load the page, then cache it automatically
  // server side render pages that were not statically generated at run time

  return trimmedExercises.map(word => ({
    _id: word._id,
  }));
}
 