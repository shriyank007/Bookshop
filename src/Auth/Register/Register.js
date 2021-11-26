import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import { useDispatch} from 'react-redux';
import { signUp } from '../../Actions/AuthAction'
import './Registerstyle.css'
// import axios from 'axios';

 export const Register=()=> {
    // let history = useHistory();
    const dispatchMethod=useDispatch();
    const validEmail = RegExp("^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$");
    const validpass = RegExp("^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$");
    const validphone = RegExp("[789]{1}[0-9]{9}");
   const [inputeState,setInputeState]=useState({isError:{
    username:'',
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
        dispatchMethod(signUp(user));
    }
   return (
    <div className="register-form">

    <Form onSubmit={submitHandler}>
        <h2 className="headerTitle">
          <center>REGISTER HERE</center>
        </h2>
              <Form.Group className="mb-9"  controlId="formBasicFname" >
              <Form.Label>User Name</Form.Label>
              <Form.Control placeholder="username" name="username" onChange={handleChange}/>
    {inputeState.isError.username.length>0 &&(
      <span className="msg">{inputeState.isError.username} </span>
    )}
    </Form.Group>
                <Form.Group className="mb-9"  controlId="formBasicFname" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email" name="email" onChange={handleChange} />
      {inputeState.isError.email.length>0 &&(
      <span className="msg">{inputeState.isError.email} </span>
    )}
                </Form.Group>
                <Form.Group className="mb-9"  controlId="formBasicFname" >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
      {inputeState.isError.password.length>0 &&(
      <span className="msg">{inputeState.isError.password} </span>
    )}    
                </Form.Group>
                <Form.Group className="mb-9"  controlId="formBasicFname" >
                <Form.Label>Phone Number</Form.Label>
      <Form.Control type="phoneno" placeholder="Phone Number" name="phoneno" onChange={handleChange} />
      {inputeState.isError.phoneno.length>0 &&(
      <span className="msg">{inputeState.isError.phoneno} </span>
    )}
    </Form.Group>
    <Form.Group className="mb-9"  controlId="formBasicFname" >
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Area,Locality.."  name="address" onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-9"  controlId="formBasicFname" >
      <Form.Label>City</Form.Label>
      <Form.Control name="city" onChange={handleChange} />
    </Form.Group>
    <Form.Group className="mb-9"  controlId="formBasicFname" >
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
            
        <option>Bihar</option>
        <option> New Delhi</option>
        <option>West Bengal</option>
        <option>Rajasthan</option>
      </Form.Select>
    </Form.Group>
                <Button className="button7" variant="primary" type="submit">REGISTER</Button>
            </Form>
        </div>
    )
}

