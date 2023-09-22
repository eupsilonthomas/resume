import React from "react";
import Image from 'next/image';

function NotFound() {
  return (
    <div className="">
    <div></div>
   <Image
     className="m-auto pt-24 p-4"
     src="/where-is-it.webp"
     width={800}
     height={800}
     alt="Oh Whoops! Its not there! &apos;"
   />
   </div>

  )
}

export default NotFound;