
import React from 'react';
import { Card,Row,Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../Product/Product.json'
import "./BookCatStyle.css"

export default function BookCategory() {
  return (
      <div className="product-container">
      {
      data.Product.map((val)=>(
        <Row xs={2} md={3} className="g-4">
          <Col>
          <Card style={{ width: '13rem' }}>
          <Card.Img variant="top" src={val.b_img} />
            <Card.Title className="header">{val.b_name}<br/>
            {val.b_id}
            </Card.Title>
            <Button className="btn-click">
              <Link to={`/booksub/${val.b_id}`}><h4>View</h4></Link>
            </Button>
        </Card>
        </Col>
</Row>
      ))
      }
     </div>  
       )
}