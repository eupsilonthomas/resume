'use client';
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { RWebShare } from "react-web-share";
import { MdOutlineFileUpload} from 'react-icons/md';
 
function Header() {
  return <header className="header flex justify-between">
    <div className="mt-2 pt-2 ml-4">
      <a aria-label={"About this site"} className="" href="/">
      <svg height="60" width="60">
           <circle cx="20" cy="20" r="15" stroke="black" strokeWidth="2" fill="whitesmoke" />
         </svg>
      </a>  
    </div> 
    <div className="header-subnav flex">
      <div className="">
        <Link href="/resume" className="hover:text-decoration">Resumé</Link>
      </div>
      <div className="">
        <Link href="/words" className="p-4  hover:text-decoration">Words</Link>
      </div>
      <div className="">
        <Link href="/404" className="pr-4  hover:text-decoration">404</Link>
      </div>

      

      <div className="hover:teal-600">
        <RWebShare
         data={{
            text: "Evelyn D. Thomas",
            url: "https://www.evelyndthomas.com/",
            title: "Evelyn D Thomas site",
          }}
          onClick={() => console.log("Successfully shared!")}    
        > 
        <button aria-label={"share Evelyn's site"} className="shadow-xl border-2 hover:bg-white shadow-xl, rounded-xl"><MdOutlineFileUpload style={{fontSize:'27px'}} /></button>
      </RWebShare> 
      </div>  
    </div>     
 </header>
}

export default Header;