import React from "react";

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')
}

import Nav from "../components/header/Nav";
import Footer from "../components/footer/Footer"



const Refer=()=>{
  
return(
<>
        <Nav/>
   
          <div className="cnsoon">
                ...
          </div>
          <h2 style={{textAlign:"center"}}>
            Refer and Earn
            Coming soon. . .</h2>
            <br/>
            <br/>
           
          
          
        <Footer/>
       
    </>
)
}
export default Refer