 
import React,{Suspense} from 'react';
import WordList from './WordList';
 
const Words:any=(): JSX.Element => {
    return (
        <main className="center-container flex min-h-screen flex items-center  m-auto">
          <title>Chickasaw words demonstration | Evelyn D Thomas</title>       
          <meta name="description" content="Chickasaw word demonstration.  See a new words"  />  
          <div className=""> 
            <Suspense fallback={<p className='text-red-500'>Loading with random delay to show Suspense ...</p>}>
            <div className="grid center m-1 p-4 text-2xl text-blue-500"> 
              <h1>Refresh page to see Reactjs Suspense in action ....</h1>
              <p>Notice the list above doesn't change unless you click 'Words': server component.</p>
              <p>Notice the list below is different to the other word list.</p>
              <p>Click on a word to go to that word's page.</p>
              </div>  
              <div className="grid center m-1 p-4 ">
                <WordList/>
              </div>  
            </Suspense> 
          </div>
        </main>
    );
};

export default Words;