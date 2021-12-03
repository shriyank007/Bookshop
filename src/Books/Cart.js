import React from 'react'
import {useParams} from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Cart.css'

export default function Cart() {
    const val =useParams();
    return (
      <div className="Header">
      <Card className="text-center"  >
      <Card.Header className="hed"><h4>Your Cart</h4></Card.Header>
      <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text className="pname">
      {val.cId}
      <br></br>
       {val.ccId}
      </Card.Text>
       <Link to="/buynow"> 
        <Button variant="primary" type="button">Buy Now</Button> 
      </Link>
     </Card.Body>
</Card>
 

      </div>
  )
}