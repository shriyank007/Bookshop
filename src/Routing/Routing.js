import React,{ lazy,Suspense } from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Header from '../Components/Header';
import Home from '../Components/Home'
import About from '../Components/About'
import BookSubCat from '../Books/BookSubCat';
import BookDetails from '../Books/BookDetails';
import BookCategory from '../Books/BookCategory';
import Cart from '../Books/Cart';
import Register from '../Auth/Register/Register';
import { Login } from '../Auth/Login/Login';
const Contact=lazy(()=>import('../Components/Contact'));



function Routing() {
    return (
        <Router>
         <Header/>
         <Suspense fallback={<h1>Loading...</h1>}>
           <Routes>
            <Route path="" element={<Home />}></Route> 
            <Route path="about"  element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="bookcategory" element={<BookCategory />}></Route>
            <Route path="booksub/:bokId" element={<BookSubCat />}></Route>
            <Route path="bookdetails/:bokId/:subId" element={<BookDetails />}></Route>
            <Route path="reg" element={<Register />}></Route> 
             <Route path="login" element={<Login />}></Route> 
             <Route path="cart/:cId/:ccId" element={<Cart/>}></Route> 
             {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
       </Suspense>
        </Router>
    )
}

export default Routing