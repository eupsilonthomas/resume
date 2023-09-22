 
import React,{Suspense} from 'react';
import WordList from './WordList';
 
const Words:any=(): JSX.Element => {
    return (
        <main className="center-container min-h-screen  m-auto">
          <title>Chickasaw words demonstration | Evelyn D Thomas</title>       
          <meta name="description" content="Chickasaw word demonstration.  See a new words"  />  
            <div className="text-4xl mt-8">Select a word </div>
        </main>
    );
};

export default Words;