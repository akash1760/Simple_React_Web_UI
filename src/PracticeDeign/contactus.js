import React from "react";

class Contact extends React.Component{
    render(){
        return(
            <div style={{height:"517px"}}>
                <center>
                   <h2 style={{fontFamily:"Papyrus",textShadow:"5px 2px lightgrey"}}><b>Contact Us </b></h2>
                    <hr/>
                   </center>
                   <div className="row" style={{marginLeft:"20px",marginRight:"0px",padding:"100px"}}>
                
                    <div className="col-md-6" ><center><div className="phone"></div><br/>
                    <h3>Phone Number</h3>
                    <h4>+91 9999999999</h4>
                    <p>You can contact us by dialing our phone number</p></center></div>

                   <div className="col-md-6"> <center><div className="email"></div><br/>
                    <h3>Email Address</h3>
                    <h4>abcxyz@gmail.com</h4>
                    <p>You can contact us by sending Mail with related query</p></center></div>
              
            </div>
            </div>
            
        )
    }
}

export default Contact;