import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";

import Gallery from "./components/FunctionalComponents/Gallery";

import Contact from "./components/FunctionalComponents/Contact";
import Navbar from "./components/FunctionalComponents/Navbar";
import UseState from "./components/FunctionalComponents/Hooks/UseState";
import Signup from "./components/FunctionalComponents/Signup";
import Login from "./components/FunctionalComponents/Login";
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect";
import UseEffectApi from "./components/FunctionalComponents/Hooks/UseEffectAPI";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() { 
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path="/Gallery" element={<Gallery image="SECE logo" page="Gallery"/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/use-state" element={<Contact />}></Route>
         
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/UseState" element={<UseState/>}></Route>
          <Route path="/UseEffect" element={<UseEffect/>}></Route>
          <Route path="/use-effectapi" element={<UseEffectApi/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
        )
  }
  
  export default App;