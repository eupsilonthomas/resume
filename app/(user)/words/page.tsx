 
import React,{Suspense} from 'react';
import WordList from './WordList';
 
const Words:any=(): JSX.Element => {
    return (
        <>
          <title>Chickasaw words demonstration | Evelyn D Thomas</title>       
          <meta name="description" content="Chickasaw word demonstration.  See a new words"  />  
          <div className="text-6xl mb-4 ">Select a word </div>
        </>
    );
};

export default Words;