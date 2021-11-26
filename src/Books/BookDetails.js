import React from 'react'
import data from '../Product/Product.json'
import { useParams } from 'react-router-dom'
import {Button,Col,Row,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'


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
         <img variant="top" src={book.bk_img} alt="image01"/>
        </Col>
        <Col className="coll" > 
        <h3 className="name">{book.bk_name}</h3>
        <br></br>
        <h2> Price : {book.price}</h2>
        <br></br>
        <h3 className="head">AUTHOR</h3>
        <p className="des"> {book.author} </p>
        <br></br>
        <h3 className="fit">DESCRIPTION : {book.bk_description}  </h3>
        <br></br>
        <Button className="btn-click">
              <Link to={`/cart`}><h4>Add to Cart</h4></Link>
            </Button>
       
        </Col>
        </Row>
        </Container>
        
        </> 
)
}