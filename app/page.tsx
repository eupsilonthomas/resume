import Image from 'next/image';
 import React, {Suspense} from "react";
 import Words from './(user)/words/WordList';

export default function Home() {
  return (
    <main className="flex flex-col min-h-[90vh] items-center justify-between pl-4 pr-4">
      <div className="grid home"> 
      <Suspense fallback={<p className='text-red-500'>Loading a Chickasaw word of the day</p>}>
        <h1>Using suspense with Random Chickasaw word of the day....</h1>
        <div className= "flex space-x-2">
          <Words/>
        </div>
      </Suspense> 
      </div>
    </main>
  )
}
