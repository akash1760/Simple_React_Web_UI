import React from "react";

class Careers extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
    
        }
    }
    career(){
        var j=this.refs.role.value;
        var l=this.refs.loc.value;
        var roles="Web developer";
        var locations="Chennai";
        if(j=='Job Role' || l=='Job Location'){
            alert("please choose job role and job location");
        }
        else if(j==roles && l==locations){
            alert("1 job available");
        }
        else{
            alert("No jobs available");
        }


    }
    render(){
        return(
            <div className="row" style={{height:"517px",marginRight:"0px"}}>
                   <center>
                   <h2 style={{fontFamily:"Papyrus",textShadow:"5px 2px lightgrey"}}><b>Explore Career</b></h2>
                    <hr/>
                   </center>
                   <div align="center" style={{padding:"100px"}}>
                   <select ref="role" style={{border:"3px outset rgb(10,222,229)",width:"275px"}}>
                        <option>Job Role</option>
                        <option>Web developer</option>
                        <option>Developer</option>
                        <option>Tester</option>
                        <option>Manager</option>
                        <option>Software Engineer</option>
                    </select>&nbsp;
                   

                    <select ref="loc" style={{border:"3px outset rgb(10,222,229)",width:"275px"}}>
                        <option>Job Location</option>
                        <option>Mumbai</option>
                        <option>Chennai</option>
                        <option>Bangalore</option>
                        <option>Hydrabad</option>
                    </select>
                    &nbsp;

                    <input className="bt btn btn-danger" type="button" value="Search" onClick={this.career.bind(this)} style={{backgroundColor:"rgb(10,222,229)",width:"100px",color:"black",borderRadius:"20px"}}/>

                   </div>
            </div>
        )
    }
}

export default Careers;