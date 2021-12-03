import React,{useState} from 'react'
import {Form,Row,Col,Button,Container} from 'react-bootstrap'
import './Registerstyle.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

 const Register=()=> {

    const validEmail = RegExp("^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$");
    const validpass = RegExp("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$");
    const validphone = RegExp("[789]{1}[0-9]{9}");
   const [inputeState,setInputeState]=useState({isError:{
    username:'',
      lname:'',
      email:'',
      password:'',
      phoneno:''
    }})
  const handleChange=(event)=>{
    event.persist();
    let {name,value} = event.target;
    let isErr={...inputeState.isError};
    switch(name){
        case"username":
            isErr.username=(value.length<3?"Atleast 3 character required":"");
            break;
        case"phoneno":
            isErr.phoneno=validphone.test(value)?"":"Invalid number";
            break;
        case"email":
           
            isErr.email=validEmail.test(value)?"":"Invalid Email";
            break;
        case"password":
            
            isErr.password = validpass.test(value)?"":"Invalid password"
            break; 
    }
    setInputeState({...inputeState,[name]:value,isError:isErr});
    console.log("Inpute state: ",inputeState);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log("After Submit:",inputeState);

        const user=inputeState;
        axios.post('https://nodeprojectapi.herokuapp.com/register',user)
         .then(res=>{
           console.log(res);
          })
          .catch(err=>{
            console.log(err);
          })
    }
   return (
     <>
    <div className="regform">     
    <Container className="contain">  
    <Form onSubmit={submitHandler}>
      <center>  <h1>REGISTER</h1></center>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridUser">
    <Form.Label>UserName</Form.Label>   
    <Form.Control placeholder="username" name="username" onChange={handleChange}/>
    {inputeState.isError.username.length>0 &&(
      <span className="msg">{inputeState.isError.username} </span>
    )}
    </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
      {inputeState.isError.email.length>0 &&(
      <span className="msg">{inputeState.isError.email} </span>
    )}
    </Form.Group>
    </Row>
    <Row className="mb-3">
   <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
      {inputeState.isError.password.length>0 &&(
      <span className="msg">{inputeState.isError.password} </span>
    )}
    </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridPhone">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="phoneno" placeholder="Phone Number" name="phoneno" onChange={handleChange} />
      {inputeState.isError.phoneno.length>0 &&(
      <span className="msg">{inputeState.isError.phoneno} </span>
    )}
    </Form.Group>
    </Row>
    <center>
    <Button className="btn-click">
              <Link to={`/login`}><h4>Submit</h4></Link>
     </Button>
    </center>
    </Form>
    </Container>
    </div>
    </>
    )
}
export default Register
