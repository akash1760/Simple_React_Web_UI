import React from "react";

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            
    
        }
    }
    lolgins(){
        var em=this.refs.email.value;
        var ps=this.refs.pass.value;

        if(em=="abc@gmail.com" && ps=="123")
        {
            alert("Login Successfully")
            alert("welcome "+" "+em)

        }
        else{
            alert("Please enter valid credentials..")
        }
   
        
    }
    render(){

        return(
            <div style={{height:"517px"}}>
                <div className="login">
                <center>
                    <h2 style={{fontFamily:"Papyrus",textShadow:"5px 2px lightgrey"}}><b>Login</b></h2>
                    <hr/>

                    
                    <label style={{width:"120px",color:"teal",fontWeight: "500"}}>Email Address</label>
                    <input type="text" placeholder="enter your email addres" ref="email" className="form-group" style={{border:"3px outset rgb(10,222,229)",width:"275px"}}/><br/><br/>
                    <label style={{width:"120px",color:"teal",fontWeight: "500"}}>Password</label>
                    <input type="text" placeholder="enter your password" ref="pass" className="form-group" style={{border:"3px outset rgb(10,222,229)",width:"275px"}}/><br/><br/>

                <br/>
                <input type="button"   value="Login" className="bt btn btn-danger" style={{backgroundColor:"rgb(10,222,229)",width:"100px",color:"black",borderRadius:"20px"}} onClick={this.lolgins.bind(this)}/><br/><br/>

                </center>

                </div>
            </div>
        )
    }
}
export default Login;