import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar'
import Textform from './component/Textform'
import Alert from './component/Alert';
import About from './component/About'
import Contact from './component/Contact'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState("dark")
  const [text,settext]=useState("Enable lightmode")
  const toggle=()=>{
    if (mode==="dark"){
    setmode("light")
    settext("Enable DarkMode")
    document.body.style.backgroundColor="white"
    document.title="Word Master-Light Mode"
    setTimeout(() => {
      document.title="Install Word Master"
    }, 2000);
    setTimeout(() => {
      document.title="Word Master-Light Mode"
    }, 4000);

    
  }else{
    setmode("dark")
    settext("Enable LightMode")
    document.body.style.backgroundColor="#131842"
    document.title="Word Master-Dark Mode"
    setTimeout(() => {
      document.title="Install Word Master"
    }, 2000);
    setTimeout(() => {
      document.title="Word Master-Dark Mode"
    }, 4000);
  }
  }
  return (
   <>
   <Router>
  <Navbar title="Word Master" mode1={mode} text1={text} togglemode={toggle}/>
  <Alert alert={"Please change either to Lightmode or Darkmode to see the contents and close the warning"}/>
  <div className="container my-3">
        <Routes>
        <Route path="/" element={<Textform  heading="Please enter text" mode1={mode}/>} />    
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />        
        {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>            
</div>
</Router>
   </>
  );
}

export default App;
