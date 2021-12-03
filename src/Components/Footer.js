import React from 'react';
import "./Footer.css"
import { BsWhatsapp } from 'react-icons/bs'
import { IconContext } from "react-icons";
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'

export default function Footer() {
    return (
        <div>
   <footer class="mainfooter" role="contentinfo">  
  <div class="footer-middle">  
  <div class="container">  
    <div class="row">  
      <div class="col-md-3 col-sm-6">  
        <div class="footer-pad">  
          <h4>OverView</h4>  
          <ul class="list-unstyled">  
              <li><a href="/home" style={{fontSize:'20px',fontWeight:'bold'}}>Home</a></li>  
            <li><a href="/about"  style={{fontSize:'20px',fontWeight:'bold'}}>About</a></li>  
            <li><a href="/contact"  style={{fontSize:'20px',fontWeight:'bold'}}>Contact Us</a></li>  
              </ul>  
        </div>  
      </div>  
      <div class="col-md-3 col-sm-6">  
        <div class="footer-pad">  
          <h4>Our Offices</h4>  
          <ul class="list-unstyled">  
            <li> Mumbai</li>  
             <li>Delhi</li>
              <li> Bangalore</li>
               <li> Chennai</li>
               <li> Kolkata</li>
              </ul>  
        </div>  
      </div>  
      
        <div class="col-md-3">  
            <h4>Contact Us </h4>  
            <h5>www.bookLand@gmail.com</h5>
            <h5>or,</h5>
            <h5>Call @:+91 7650986890</h5>
    </div> 
    <div class="col-md-3">  
            <h4> Follow Us </h4>  
            <ul class="social-network social-circle"> 
            <IconContext.Provider value={{ color: "green", size: "2em" }}>
            <li><a href="https://web.whatsapp.com"> <BsWhatsapp/></a></li>  
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "blue", size: "2em" }}>
            <li><a href="https://www.facebook.com"> <FaFacebookSquare/></a></li>  
        </IconContext.Provider> 
        <IconContext.Provider value={{ color: "lightblue", size: "2em" }}>
            <li><a href="https://www.linkedin.com/signup"> <AiFillLinkedin/></a></li>  
        </IconContext.Provider> 
            </ul>               
    </div> 
    </div> 
        <img src="./Image/logo1.jpg" class="img1" alt="img1" style={{width : '15%'}}/>
    <div class="row">  
    <div class="col-md-12 copy">  
    <p class="text-center"> © Copyright 2021 - Company Name.  All rights reserved. </p>  
    </div>  
    </div>  
  </div>  
  </div>  
   
</footer> 
   
        </div>
    )
}