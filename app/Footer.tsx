import React from "react";
import Nav from './Nav'

function Footer() {
  const currentYear = new Date().getFullYear();
return (
<footer>
    <div className="footer flex"> 
      <div className="grid-cols-1">
       <Nav/>  
        <div className="center pb-4"> 
          <strong>&nbsp;&nbsp; ©Evelyn D Thomas 2022 - {currentYear}</strong>  
        </div>   
      </div>  
    </div>  
</footer>)
}

export default Footer;