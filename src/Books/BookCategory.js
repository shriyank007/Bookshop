
import React,{useState} from 'react';
import { Card,Row,Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../Product/Product.json'
import "./BookCatStyle.css"

export default function BookCategory() {
const [searchText,setSearchTerm]=useState('');
  return (
     <>
     <div className="searchdec">
     <p className="heading">Search:
     <input  type="text" placeholder="search..." onChange={event=>setSearchTerm(event.target.value)} />
      </p><br/>
      </div>
     <div><h1 style={{fontFamily: 'verdana',fontWeight: '900',backgroundColor: 'grey'}}><center>BOOKS CATEGORIES</center></h1></div>
      <div className="product-container">
        <Row >
          {
            data.Product.filter((val)=>{
              if(searchText === ""){
                return val
              }
              else if(val.b_name.toLowerCase().includes(searchText.toLowerCase())){
                return val;
              }
            }).map((val)=>(
          
          <Col>
          <Card style={{ width: '13rem' }}>
          <Card.Img variant="top" src={val.b_img} />
            <Card.Title className="header">{val.b_name}
            </Card.Title>
            <Button className="btn-click">
              <Link to={`/booksub/${val.b_id}`}><h4>View</h4></Link>
            </Button>
        </Card>
        </Col>
            ))
}
</Row>
     </div>  
     <div>
              <center>
           <Link to={`/home`}>
            <Button variant="btn btn-click">BACK </Button> 
           </Link>
            </center>
            </div>
     </>
       )
}