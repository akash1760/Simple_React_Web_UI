import React from "react";

class Help extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
    
        }
    }
  
    
    helps(){
        var name=this.refs.name.value;
        var email=this.refs.email.value;
        var query=this.refs.query.value;

        if(name=="" && email=="" && query==""){
            alert("Please enter name,emailid and query")           

        }
        else{
            alert("Your details registered successfully\n we will response in some time")
        }


    }
    render(){
        return(
            <div style={{height:"517px"}}>
                    <div className="help">
                    <center>
                    <h2 style={{fontFamily:"Papyrus",textShadow:"5px 2px lightgrey"}}><b>Help</b></h2>
                    <hr/>

                    
                    <label style={{width:"120px",color:"teal",fontWeight: "500"}}>Name</label>
                    <input type="text" ref="name" placeholder="enter your name" className="form-group" style={{border:"3px outset rgb(10,222,229)",width:"275px"}}/><br/><br/>
                    <label style={{width:"120px",color:"teal",fontWeight: "500"}}>Email Address</label>
                    <input  ref="email" type="text" placeholder="enter your email addres" className="form-group" style={{border:"3px outset rgb(10,222,229)",width:"275px"}}/><br/><br/>
                    <label style={{width:"120px",color:"teal",fontWeight: "500"}}>Query</label>
                    <textarea ref="query" placeholder="Type your problem here..." className="form-group" style={{border:"3px outset rgb(10,222,229)",width:"275px"}}></textarea><br/><br/>

                <br/>
                <input type="button" onClick={this.helps.bind(this)}  value="Submit" className="bt btn btn-danger" style={{backgroundColor:"rgb(10,222,229)",width:"100px",color:"black",borderRadius:"20px"}}/><br/><br/>

                </center>
                    </div>
            </div>
        )
    }
}

export default Help;