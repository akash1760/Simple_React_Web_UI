import React from "react";
import { BrowserRouter as Router,Route,Link,Routes } from "react-router-dom";
// import { FaBeer, FaQuestion } from 'react-icons/fa';
// import { BsFillPatchQuestionFill} from "react-icons/bs";
import {AiFillInstagram,AiFillFacebook} from "react-icons/ai";
import Signup from "./Signup";
import photo from "D:/ReactJS/company_work/src/Assets/logo.png";
import Home from "./Home";
import Login from "./Login";
import Contact from "./contactus";
import Careers from "./Careers";
import Help from "./Help";
import News from "./News&Updates";
import { Helmet } from "react-helmet";
// import LoginForm from "./LoginForm";
import '../index.css';
class Deisgn extends React.Component{
    render(){       
        return(
            <Router>
                <Helmet>
                    <style>{".body{background-color:aliceblue}"}</style>
                </Helmet>
                
             <div>
                <div className="navbar nav" style={{backgroundColor:" rgb(10, 222, 229)",height:"100px"}}>
                    <div className="col-md-1">
                        {/* <h3 style={{marginLeft:"10px"}}><b>CIIT</b></h3> */}
                        <a href="http://localhost:3000/"><img src={photo} alt="image" className="image"/></a>

                    </div>
                    <div className="col-md-9">
                    <Link to="/"  className="link" style={{textDecoration:"none",color:"black",fontSize:15,marginLeft:"10px",borderRadius:"10%"}}><b>Home</b></Link>
                    &nbsp; &nbsp;&nbsp; &nbsp;
                    
                    <Link to="/careers"  className="link" style={{textDecoration:"none",color:"black",fontSize:15,marginLeft:"10px",borderRadius:"10%"}}><b>Careers</b></Link>
                    &nbsp; &nbsp;&nbsp; &nbsp;
                    <Link to="/newsupdates"  className="link" style={{textDecoration:"none",color:"black",fontSize:15,marginLeft:"10px",borderRadius:"10%"}}><b>News & Updates</b></Link>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <Link to="/contact-us" className="link" style={{textDecoration:"none",color:"black",fontSize:15,marginLeft:"10px",borderRadius:"10%"}} ><b>Contact-Us</b></Link>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    

                    </div>
                    <div className="col-md-2">
                    <Link to="/Login" className="link" style={{textDecoration:"none",color:"black",fontSize:15,marginLeft:"10px",borderRadius:"10%"}}><b>Login</b></Link>
                    &nbsp; &nbsp;  
                    <Link to="/Signup" className="link" style={{textDecoration:"none",color:"black",fontSize:15,marginLeft:"10px",borderRadius:"10%"}}><b>Sign-Up</b></Link>
                    &nbsp; &nbsp;
                    <Link to="/Help" className="link" style={{textDecoration:"none",color:"black",fontSize:15,marginLeft:"10px"}}><b>Help</b></Link>
                    &nbsp; &nbsp;


                    </div>

                </div>
             </div>
             
 {/* body design */}
 <br/>              
             <div>
                    <Routes>

                    <Route path="/" element={<Home/>}/>
                    <Route path="/contact-us" element={<Contact/>}/>
                    <Route path="/careers" element={<Careers/>}/>
                    <Route path="/newsupdates" element={<News/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Signup" element={<Signup/>} />
                    <Route path="/Help" element={<Help/>}/>
                    </Routes>
                </div>
                <div className="footer">
                    <h6>Email us: abcxyz@gmail.com &nbsp;&nbsp;&nbsp;   
                    Contact with us <span style={{fontSize:"30px"}}><AiFillInstagram/><AiFillFacebook/></span> </h6> 

                    <div className="company">
                        <i>Phishbowl Solutions pvt.ltd <span className="span">Privacy & terms</span></i>                                                           
                </div>
               
                </div>

            </Router> 
            )
    }
}

export default Deisgn;