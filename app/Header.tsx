'use client';
import React, { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { RWebShare } from "react-web-share";
import { MdOutlineFileUpload} from 'react-icons/md';
 

function Header() {
  return <header className="header flex justify-between">

    <div className="pt-2 pl-2 pt-4 ">
      <a aria-label={"Chickasaw Flash Cards"}className="" href="/">
        <Image className="" role="presentation" src="/grapes.svg" alt="return to home page" height={50} width={75} />
      </a>
    </div> 

    <div className="header-subnav mr-2 lg:pt-8 sm:mr-2 pt-8 pr-8">
      <div className="mb-4">
        <Link href="/resume" className="pl-6 hover:text-decoration">Resume</Link>
      </div>
      <div className="mb-4">
        <Link href="/words" className="pl-6 hover:text-decoration">Words</Link>
      </div>
      <div className="mb-4">
        <Link href="/about" className="pl-6 hover:text-decoration">About</Link>
      </div>
        <RWebShare
          data={{
            text: "Evelyn D. Thomas",
            url: "https://www.evelyndthomas.com/",
            title: "Evelyn D Thomas site",
          }}
          onClick={() => console.log("Successfully shared!")}    
         >
           
          <button className="hover:text-teal-600 pl-8"><MdOutlineFileUpload style={{fontSize:'27px'}} /></button>
        </RWebShare>
       
      </div>     
 </header>
}

export default Header;