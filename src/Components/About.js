import React from 'react'
import "./About.css"

function About() {
    return (
    <>
  <div class="about-section">
  <h1>About The BookLand</h1>
  <h5>Dear readers,</h5>
   <p>We offer huge collection of books in diverse category of Fiction, Non-fiction, Biographies, History, Religions, Self -Help, Children. We also sell in vast collection of Investments and Management, Computers, Engineering, Medical, College and School text references books proposed by different institutes as syllabus across the country. Besides to this, we also offer a large collection of E-Books at very fair pricing.
   We attempt to extend the customer satisfaction by catering easy user-friendly search engine, quick and user-friendly payment options and quicker delivery systems. Upside to all of this, we are disposed to provide exciting offers and pleasant discounts on our books.
   As well, we humbly invite all the sellers around the country to partner with us. We will surely provide you the platform for many sparkling domains and grow the “BooksWagon” family.We would like to thank you for shopping with us. You can write us for any new thoughts at “email-id” helping us to improvise for the reader satisfaction
  </p>
  </div>

<h2 style={{textAlign: 'center',backgroundColor: 'black'}}>Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="/Image/ceo.jpg" alt="Jane" style={{width: '100%'}} />
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/Image/ceo1.jpg" alt="" />
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">CEO & Founder</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="/Image/ceo3.jpg" alt="John" style={{width: '100%'}} />
      <div class="container">
        <h2>Johnson And Team</h2>
        <p class="title">CEO & Founder</p>
      </div>
    </div>
  </div>
</div>
</>
    )
}

export default About
