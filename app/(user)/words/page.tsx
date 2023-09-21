 
import React,{Suspense} from 'react';
import WordList from './WordList';
 
const Words:any=(): JSX.Element => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
          <title>Chickasaw words demonstration | Evelyn D Thomas</title>       
          <meta name="description" content="Chickasaw word demonstration.  See a new words"  />  
          <div className="home"> 
            <Suspense fallback={<p className='text-red-500'>Loading with random seconds delay ...</p>}>
              <h1>Using React Suspense with randomized group Chickasaw words of the day....</h1>
              <div className= "flex space-x-2">
                <div>
                  <WordList/>
                </div>  
              </div>
            </Suspense> 
          </div>
        </main>
    );
};

export default Words;