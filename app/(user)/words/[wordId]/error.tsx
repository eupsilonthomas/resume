'use client';
import Image from 'next/image'; 
import { useEffect } from 'react';

function Error({error, reset, back}: {
  error: Error;
  reset: ()=> void;
  back: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log('error............')
    console.log(error);
  },[error])

  return (
    <div className="center">
      <div>
       <button className="button m-2" onClick={()=> reset()}></button>
       <button className="button m-2" onClick={()=> back()}></button>
      </div>   
      <div>
      <Image
        className="m-auto"
        src="/where-did-we-go-wrong-cecily-strong.gif"
        width={500}
        height={500}
        alt="What went wrong"
      />
      </div>
    </div>
  )
}

export default Error;