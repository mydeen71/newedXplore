import React from "react";

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}

import Nav from "../components/header/Nav";
import Footer from "../components/footer/Footer"



const Terms=()=>{
  
return(
<>
        <Nav/>

        <div className="cnsoon">
          <h2 className="cson">
           terms of use
            Coming soon. . .</h2>
          </div>
          
            <br/>
            <br/>
          
          
        <Footer/>
       
    </>
)
}
export default Terms