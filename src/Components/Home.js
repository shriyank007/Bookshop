import React from 'react'
import {Carousel,Row,Col,Container,Image,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


 function Home() {
    return (
        <>
  <Carousel>
  <Carousel.Item>
    <img
    width={900} height={300} 
      className="d-block w-100"
      src="./Image/bo.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{color: 'black',fontWeight: '1000',fontSize: '60px'}}>WELCOME TO BOOKLAND</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     width={900} height={300} 
      className="d-block w-100"
      src="./Image/bo2.jpg"
      alt="Second slide"/>
      </Carousel.Item>
  <Carousel.Item>
    <img
     width={900} height={300} 
      className="d-block w-100"
      src="./Image/bo3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 style={{color: 'white',fontWeight: '1000',fontSize: '60px'}}>ONE STOP DIFFERENT BOOKS</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<h1 style={{backgroundColor: 'lightgreen'}}><center><img src="./Image/best.jpg" alt="" style ={{width : '100%',height: '200px'}} ></img></center></h1>
<Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="./Image/m1.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src="./Image/t2.jpg" thumbnail />
    </Col>
    <Col xs={6} md={4}>
      <Image src="./Image/h3.jpg" thumbnail />
    </Col>
  </Row>
  <div style={{width: 'auto'}}>
                <Image style ={{backgroundSize : 'cover',width: '100%',height: '500px'}}responsive src = "./Image/my2.jpg">
               
             </Image>
            </div>
            <div>
              <center>
           <Link to={`/bookcategory`}>
            <Button variant="btn btn-click">Get Started </Button> 
           </Link>
            </center>
            </div>
           
</Container>
        </>
    )
}
export default Home