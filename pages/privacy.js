import React from "react";

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}

import Nav from "../components/header/Nav";
import Footer from "../components/footer/Footer"



const Privacy=()=>{
  
return(
<>
        <Nav/>
   
        <div className="cnsoon">
          <h2 className="cson">
           Privacy policy
            Coming soon. . .</h2>
          </div>
          
            <br/>
            <br/>
           
          
          
        <Footer/>
       
    </>
)
}
export default Privacy