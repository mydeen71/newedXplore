import React from "react";

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}

import Nav from "../components/header/Nav";
import Footer from "../components/footer/Footer"



const Refund=()=>{
  
return(
<>
        <Nav/>
   
        <div className="cnsoon">
          <h2 className="cson">
            refund
            Coming soon. . .</h2>
          </div>
          
            <br/>
            <br/>
           
          
          
        <Footer/>
       
    </>
)
}
export default Refund