import React from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";

class Home extends React.Component{
    render(){
        return(

            <div className="row" style={{height:"517px",marginLeft:"25px",marginRight:"0px"}}><br/>
                <div className="col-md-9" >
                    <center>
                        <h4 style={{backgroundColor:"rgb(200,250,250"}}><i>Welcome to Phish-bowl</i></h4><br/>
                    </center>
                    <h6>Please  HELP us help you by sharing scammer information with us so we can protect others</h6><br/>

                    <input type="radio" name="question"/> URL Link you recieved from Scammer <BsFillPatchQuestionFill/><br/><br/>
                    <input type="radio" name="question"/> SMS Sender code of Scammer <BsFillPatchQuestionFill/><br/><br/>
                    <input type="radio" name="question"/> Phone Number of Scamer <BsFillPatchQuestionFill/><br/><br/>
                    <input type="radio" name="question"/> Social Media Profile of Scammer <BsFillPatchQuestionFill/><br/><br/>
                    <input type="radio" name="question"/> UPI ID of payment mode to <BsFillPatchQuestionFill/><br/><br/>
                    <input type="radio" name="question"/> Email ID of scammer <BsFillPatchQuestionFill/><br/><br/><br/>

                    {/* <input type="radio" name="question"/> */}


                    <input type="text" className=" form-group text-primary" style={{width:"300px",height:"50px",border:"3px solid rgb(10,22,229)",marginLeft:"200px",borderRadius:"10px"}}/>
                    <input type="button" className="bt btn btn-primary" value="Click to Report" style={{backgroundColor:"rgb(10,222,229)",marginLeft:"100px",borderRadius:"20px"}}/>
                    <input type="button" className="bt btn btn-primary" value="Click to Search" style={{backgroundColor:"rgb(10,222,229)",marginLeft:"50px",borderRadius:"20px"}}/>

                </div>

                <div className="col-md-3" >
                    <div className="box">
                        <marquee direction="left" behavior="alternate" scrollamount="3"><h3>Sign Up with us to<br/> join the Fraud<br/> Fighter Army<br/> Today!!</h3></marquee>
                    </div><br/>
                    <div className="box1">
                        <marquee direction="down" height="300px"><center><h6>Space for advertising...</h6></center></marquee>
                    </div>
                    <div className="box2"></div>
                </div>
            </div>
        )
    }
}

export default Home;