import React from "react";
import { SocialIcon } from 'react-social-icons';

function Nav() {
  const currentYear = new Date().getFullYear();
  return <nav>
    <div className="center"> 
      <div className="">
        <SocialIcon 
          url="https://github.com/eupsilonthomas"
          className="m-2 bg-white rounded-3xl border-2 hover:bg-slate-500 shadow-md hover:shadow-xl"
          label=""
          />
        
        <SocialIcon 
          url="https://www.linkedin.com/in/eupsilon/"
          className="m-2 bg-white rounded-3xl border-2 hover:bg-blue-600 shadow-md hover:shadow-xl"
          label=""
         /> 
      </div>    
    </div> 
</nav>
}

export default Nav;