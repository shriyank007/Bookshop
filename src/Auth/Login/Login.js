import React,{useState} from 'react'
import { Form,Button} from 'react-bootstrap';
import { useDispatch} from 'react-redux';
import { signIn } from '../../Actions/AuthAction'
import './Loginstyle.css'
// import axios from 'axios';

export const Login=()=> {
  const dispatchMethod=useDispatch();
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
        dispatchMethod(signIn(user));
    }
    return (
        <div className="login-form">

            <Form onSubmit={submitHandler}>
                <h2 className="headerTitle">
                  <center> LOGIN FORM </center>
                </h2>
                <fieldset className="field">
                <Form.Group className="mb-4"  controlId="formBasicFname" >
                <Form.Label>Email</Form.Label>
                <Form.Control type ="email" placeholder="Email" name="email" onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-4"  controlId="formBasicFname" >
                <Form.Label>Password</Form.Label>
                < Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
               
                </Form.Group>
                </fieldset>
                <Button className="button7" variant="primary" type="submit">LOGIN</Button>
            </Form>
        </div>
          
        )
      }
    