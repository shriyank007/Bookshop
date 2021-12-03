import React,{useState} from 'react'
import { Form,Button,Container} from 'react-bootstrap';
import './Loginstyle.css'
import axios from 'axios';

export const Login=()=> {
    const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$');
    const validatePwd=RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');
    const [inputState,setInputState]=useState({isError: {
        email:'',
        password:''
    }})

    const handleChange=(event)=>{
        event.persist();
        let {name,value}=event.target;
        let isErr={...inputState.isError};
        switch(name){
            case "email": isErr.email=
            //value.length<4?"Atleast 4 characters required":"";
            validateEmail.test(value)?" ":"Wrong Pattern";
            break;
            case "password": isErr.password=
           // value.length<4?"Atleast 4 characters required":"";
            validatePwd.test(value)?" ":"Wrong Pattern";
            break;
        }
        setInputState({...inputState,[name]:value,isError:isErr});
        console.log("Input State: ",inputState)
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log("After Submit:",inputState);

        const user=inputState;
        axios.post('https://nodeprojectapi.herokuapp.com/login',user)
         .then(res=>{
           console.log(res);
           window.sessionStorage.setItem("Token",res.data.token)
          })
          .catch(err=>{
            console.log(err);
          })
    }
    return (
      <>
    <div  className="logform">
       <Container className="contain">  
        <Form onSubmit={submitHandler}>
            <h1 className="headerTitle">
              <center> LOGIN</center>
            </h1>
            <fieldset className="field">
            <Form.Group className="mb-3"  controlId="formBasicEname" >
            <Form.Label>Email</Form.Label>
            <Form.Control type ="email" placeholder="Email" name="email" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3"  controlId="formBasicPname" >
            <Form.Label>Password</Form.Label>
            < Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
           
            </Form.Group>
            </fieldset>
            <center>
            <Button className="btn-click">
             Login
            </Button>
            </center>
        </Form>
        </Container>
    </div>
    </>
      
    )
  }
