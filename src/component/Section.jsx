import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import {Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Pagenotfound from './pages/Pagenotfound'
import Item_detail from './pages/Item_detail'
import Catagory_detail from './pages/Catagory_detail'

function Section() {
    return (
        <>
        
        <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/item_detail/:item_id" element={<Item_detail/>}/>
            <Route path="/catagory_detail/:item_cat" element={<Catagory_detail/>}/>
            {/* <Route path="/catagory_detail/*" element={<Pagenotfound/>}/> */}
            <Route path="/*" element={<Pagenotfound/>}/>
        </Routes>
        
        </>
    )
  
}

export default Section
