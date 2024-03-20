import React from "react";

class Signup extends React.Component{
    render(){

        return(
            <div  style={{height:"517px"}}>
                
                <div className="signup">
                <center>
                    <h2 style={{fontFamily:"Papyrus",textShadow:"5px 2px lightgrey"}}><b>SignUp</b></h2>
                    <hr/>

                    <label style={{width:"120px",color:"teal",fontWeight: "500"}}>First Name</label>
                    <input type="text" placeholder="enter your first name" className="form-group" style={{border:"3px outset rgb(10,222,229)",width:"275px"}}/><br/><br/>
                    <label style={{width:"120px",color:"teal",fontWeight: "500"}}>Last Name</label>
                    <input type="text" placeholder="enter your last name" className="form-group" style={{border:"3px outset rgb(10,222,229)",width:"275px"}}/><br/><br/>
                    <label style={{width:"120px",color:"teal",fontWeight: "500"}}>Email Address</label>
                    <input type="text" placeholder="enter your email addres" className="form-group" style={{border:"3px outset rgb(10,222,229)",width:"275px"}}/><br/><br/>
                    <label style={{width:"120px",color:"teal",fontWeight: "500"}}>Password</label>
                    <input type="text" placeholder="enter your password" className="form-group" style={{border:"3px outset rgb(10,222,229)",width:"275px"}}/><br/><br/>
                    <label style={{width:"120px",color:"teal",fontWeight: "500"}}>Mobile</label>
                    <input type="text" placeholder="enter your mobile number" className="form-group" style={{border:"3px outset rgb(10,222,229)",width:"275px"}}/><br/><br/>

                <br/>
                <input type="button"   value="SignUp" className="bt btn btn-danger" style={{backgroundColor:"rgb(10,222,229)",width:"100px",color:"black",borderRadius:"20px"}}/><br/><br/>

                <h6>you are already registred<span><a href="/login"><i>    Login Here</i></a></span></h6>
                </center>
                </div>
            </div>
        )
    }
}
export default Signup;