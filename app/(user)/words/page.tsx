 
import React from 'react';
 
const Words:any=(): JSX.Element => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-8">
          <title>Chickasaw words demonstration | Evelyn D Thomas</title>       
          <meta name="description" content="Chickasaw word demonstration.  See a new words"  />  
          <div className="grid home"> 
            <a className="hover:underline" href="/words/64387d3084b74db82ea318d8sdf">
               Chickasaw language random word of the day. &nbsp;
            </a>
          </div>
        </main>
    );
};

export default Words;