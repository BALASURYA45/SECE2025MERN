import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import ClassCompEG from "./components/classComponents/ClassCompEG";
import Gallery from "./components/FunctionalComponents/Gallery";
import Contact from "./components/FunctionalComponents/Contact";
import Navbar from "./components/FunctionalComponents/Navbar";
import Signup from "./components/FunctionalComponents/Signup";
import Login from "./components/FunctionalComponents/Login";
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
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
        )
  }
  
  export default App;