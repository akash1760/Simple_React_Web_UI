import React from "react";
import news1 from "D:/ReactJS/company_work/src/Assets/news1.png";
import news2 from "D:/ReactJS/company_work/src/Assets/news2.png";
import {Carousel} from "react-bootstrap"
class News extends React.Component{
    render(){
        return(
            <div className="row" style={{height:"517px",marginRight:"0px"}}>
                   <center>
                   <h2 style={{fontFamily:"Papyrus",textShadow:"5px 2px lightgrey"}}><b>News & Updates </b></h2>
                    <hr/>
                   </center>
                   <div className="news1 col-md-4">
                    {/* <h5 style={{textAlign:"center",padding:"150px"}}></h5>*/}
                    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={news1}
      alt="First slide"
      style={{height:"350px",padding:"10px"}}

    />
    {/* <Carousel.Caption color="black">
      <h3 color="black">First slide label</h3>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={news2}
      style={{height:"350px",padding:"10px"}}
      alt="Second slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={news1}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
                   
                    </div> 
                   <div className="col-md-4">
                   <div className="news2"><h5 style={{textAlign:"center",padding:"70px"}}>News and Updates here..</h5></div>
                   <div className="news21"><h5 style={{textAlign:"center",padding:"70px"}}> News and Updates here..</h5></div>
                   
                   </div>
                  
                   <div className="news3 col-md-4" ><h5 style={{textAlign:"center",padding:"150px"}}>News and Updates here..</h5></div>

            </div>
        )
    }
}

export default News;