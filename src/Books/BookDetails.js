import React from 'react'
import data from '../Product/Product.json'
import { useParams } from 'react-router-dom'
import { Col,Row,Container,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';



export default function BookDetails() {
 const category =useParams();
 console.log('category',category);
    const subDel =data.Product.find((val)=>val.b_id === category.bokId )
    console.log('category',subDel);
    const book=subDel.subCategory.find((val)=>val.bk_id === category.subId )
    console.log('subcategory',book);
    return (
        <> 
        <Container className="container"> 
        <Row > 
        <Col>
         <img variant="top" src={book.bk_img} alt="image01" class="img5"/>
        </Col>
        <Col className="coll" > 
        <h3 className="head">Book Name:{book.bk_name}</h3>
        <br></br>
        <h3 className="head"> Price : {book.price}</h3>
        <br></br>
        <h3 className="head">Author: {book.author} </h3>
        <br></br>
        <h3 className="head">Description : {book.bk_description}  </h3>
        <br></br>
        <Button className="btn-click ">
              <Link to={`/cart/${book.bk_name}/${book.price}`}><h4>Add to Cart</h4></Link>
            </Button>
       
        </Col>
        </Row>
        </Container>
        
        </> 
)
}