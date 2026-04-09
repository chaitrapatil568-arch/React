import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PrviosCount from './counter/funcounter'
import ClassComponentEx from './counter/classcounter'
import Nav from './navbar/nav'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './navbar/home'
import About from './navbar/about'
import Contact from './navbar/contact'

function App() {
  return (
    <div className="App">
      {/* <h2>hii</h2> */}
      {/* <PrviosCount/>
      // <ClassComponentEx/> */}
    
       
       
      <Router>
         <Nav/>
        <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        </Routes>
      </Router>
    </div>
    
   
    )
}

export default App
