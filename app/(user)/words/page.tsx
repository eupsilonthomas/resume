 
import React,{Suspense} from 'react';
import WordList from './WordList';
 
const Words:any=(): JSX.Element => {
    return (
        <>
          <title>Chickasaw words demonstration | Evelyn D Thomas</title>       
          <meta name="description" content="Chickasaw word demonstration.  See a new words"  />  
          <div className="text-4xl m-4 center bg-slate-700 text-white rounded-xl shadow-xl p-8 border-2">
            Select a Word from the list
          </div>
        </>
    );
};

export default Words;