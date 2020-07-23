import React from "react"
import logo from './logo.png';
import "./style.css";
console.log(logo);
 function MainContent(){
   return(
     <div >

          <body>
              <img className="backgroundImage" src={logo} alt="Logo" />
              </body>

    </div>
   )
 }

 export default MainContent
