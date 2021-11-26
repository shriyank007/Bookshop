import React from 'react';
 import './Contact.css';
const Contact = () => {

  return (
   <>
   <div className="container1">
  <div style={{textAlign: 'center'}}>
    <h3 style={{fontSize: '30px',fontWeight: '900'}}>Contact Us</h3>
    <p style={{fontSize: '20px',fontWeight: '900'}}>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div className="row1">
    <div className="column1">
      <img src="/Image/co.jpg" style={{width: '100%'}} alt="img7"/>
    </div>
    <div className="column1">
      <form>
        <label for="fname"><b>First Name</b></label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
        <label for="lname"><b>Last Name</b></label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
        <label for="country"><b>Country</b></label>
        <select id="country" name="country">
          <option value="india">India</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject"><b>Subject</b></label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '170px'}}></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</div>
   </>
  );
}
export default Contact;