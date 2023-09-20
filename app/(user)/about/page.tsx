import React from 'react';
 

const About:any=(): JSX.Element => {
    return (
      <main className="flex flex-col items-center  min-h-[90vh]  overflow-auto">   
      <div className="grid home mb-8  pl-8 pr-8">
        <div className=""  >
       
       <title>About Chickasaw Random word generator</title> 
       <meta name="description" content="About Chickasaw Flash Cards" />        
       
       <div className="pb-8 align-center-container ">
         <div className="text-center text-4xl">   
           <h1 tabIndex={0} aria-label="About the Chickasaw Flash Cards" className="p-4 text-8xl text-bold">About</h1>  
           <h2>About this site:</h2>
           <div className="text-2xl">  
              <p tabIndex={0}>This project is built with Nextjs 13, with server and client components in React 18. </p>
              <p tabIndex={0}>The server side gathers data from a Nodejs microservice served up behind an express Gateway.</p>
              <br></br>
              <p tabIndex={0} >The serverless application is hosted on Vercel, to take advantage of the Edge network CDN capabilities.</p>
              &nbsp;
              &nbsp;
              &nbsp;
              <p>This application is a progressive web application that can be added to your phone home screen by clicking the "Add to home screen" from the the share button in Safari. </p>
              &nbsp;
              <p>This application is for education, teaching and amusement on my resume page.</p>
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
              &nbsp;
           <h2 className="text-4xl">About me:</h2>
            <div className="text-2xl" > 
              <p tabIndex={0}>I am a software engineer that lives in the Greater Los Angeles area.  I love speaking Chickasaw, and am a citizen of the Chickasaw Nation.  I love surfing, and hanging out with my family. I love building things, and sometimes I like to just go swimming in the pool. </p>
           </div>   
        </div>
        </div>
        </div>
    
         </div>
       </div>
     </main>
    );
};

export default About;