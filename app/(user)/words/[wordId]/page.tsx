 
import React from "react";
import { notFound } from 'next/navigation';
 
// toggle cache if you want to get server side render every time...
export const dynamicParams = true;

type PageProps = {
  params: {
    wordId: string;
  }
}

const fetchWord = async( wordId: string) => {
  const url = `${process.env.CHOLHKAN_API}/chickasaw/${wordId}`;
  
  let options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${process.env.CHOLHKAN_TOKEN}` 
    },
    next: {revalidate: 90} 
  }
  
  // force-cache == static page
  // no-cache == no cache
  // ISG - static generation, not here
  // ISR === const res = await fetch(url, { next: {revalidate: 60} }
  // const res = await fetch(url, {cache: ''});

  // you do need isr, so revalidate or your page will be static
  const res = await fetch(url,options);
  //const res = await fetch(url, { next: {revalidate: 60} });
  const { data } = await res.json();
  const word = data;
  
  return word;
}


async function WordPage ({params: {wordId}}: PageProps) {
  const data = await fetchWord(wordId);
  let word = data;
 
  if(!word) return notFound();
   //return the fragment or the server side parts will be gone
  return (
    <>
    <div className="min-h-[60%] max-h-[60%]">
     <div className="text-4xl bg-slate-300 card mx-auto items-center hover:bg-teal-100 shadow-xl cardhov ">
        <div className="text-teal-600">Chickasaw:</div>
        <div>{word.word[0]}</div>
        <div className="pt-4 text-teal-600">
        Definition:</div>
        <div className="">
         {word.gloss[0]}
         </div>
     </div> 
     </div>
    </>
  )
}

export default WordPage; 

/*
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
*/