import React from 'react'
import data from '../Product/Product.json'
import { useParams } from 'react-router-dom'
import {Button,Card,Row,Col} from 'react-bootstrap'
import "./BookCatStyle.css"
import { Link } from 'react-router-dom'


export default function BookSubCat() {
    const category=useParams();
    const subData=data.Product.find((val)=>val.b_id === category.bokId)

    return (
           <div className="product-container">
           {
           subData.subCategory.map((val) => (
            <React.Fragment key={val.bk_id}>
             <Row xs={2} md={3} className="g-4">
             <Col>
             <Card style={{ width: '15rem' }}>
             <Card.Img  src={val.bk_img} className="product-image"/>
               <Card.Text className="header">{val.bk_name}<br/>
               {val.b_id}
               </Card.Text>
            <Card.Text className="header">Author Name:{val.author}</Card.Text> 
            <Card.Text className="header">Price:{val.price}</Card.Text>
            <Card.Text className="header">ID:{val.bk_id}</Card.Text>
            <Button className="btn-click">
              <Link to={`/bookdetails/${ category.bokId }/${val.bk_id}`}><h4>Details</h4></Link>
            </Button>
           </Card>
           </Col>
 </Row>
 </React.Fragment>
 ))}

 </div>

           )
           }