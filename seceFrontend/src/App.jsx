import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import Gallery from "./components/FunctionalComponents/Gallery";
import UseRef from "./components/FunctionalComponents/Hooks/UseRef";
import Contact from "./components/FunctionalComponents/Contact";
import Navbar from "./components/FunctionalComponents/Navbar";
import UseState from "./components/FunctionalComponents/Hooks/UseState";
import SignUp from "./components/FunctionalComponents/Signup";
import Login from "./components/FunctionalComponents/Login";
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect";
import UseMemo from "./components/FunctionalComponents/Hooks/UseMemo";
import UseEffectApi from "./components/FunctionalComponents/Hooks/UseEffectAPI";
import UseEffectAPIimage from "./components/FunctionalComponents/Hooks/UseEffectAPIimage";
import UseCallback from "./components/FunctionalComponents/Hooks/UseCallback";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactLifecycleMethods from "./components/classComponents/ReactLifeCycleMethods";
import Student from "./components/FunctionalComponents/Hooks/Student";
import Memo from "./components/FunctionalComponents/Memoization/Memo";
import FunctionInsideClass from "./components/classComponents/FunctionInsideClass";
import LazyLoadingWithSuspense from "./components/FunctionalComponents/Memoization/LazyLoadingWithSuspense";
import UseLocalStorage from "./components/FunctionalComponents/Hooks/UseLocalStorage";
import DarkModeToggle from "./components/FunctionalComponents/Hooks/CustomHooks/DarkModeToggle";

import HoC from "./components/FunctionalComponents/HoC/HoC";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route
          path="/Gallery"
          element={<Gallery image="SECE logo" page="Gallery" />}
        ></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/use-state" element={<Contact />}></Route>
        <Route path="/Signup" element={<SignUp />}></Route>
        <Route path="/react-lifecycle-methods" element={<ReactLifecycleMethods />}></Route>
        <Route path="/UseState" element={<UseState />}></Route>
        <Route path="/UseEffect" element={<UseEffect />}></Route>
        <Route path="/use-effectapi" element={<UseEffectApi />}></Route>
        <Route path="/use-ref" element={<UseRef />}></Route>
        <Route path="/use-memo" element={<UseMemo />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/useimg" element={<UseEffectAPIimage />}></Route>
        <Route path="/use-call" element={<UseCallback />}></Route>
        <Route path="/use-context" element={<Student />}></Route>
        <Route path="/memo" element={<Memo/>}></Route>
        <Route path="/lazy" element={<LazyLoadingWithSuspense/>}></Route>
        <Route path="/use-custom" element={<UseLocalStorage/>}></Route>
        <Route path="/hoc" element={<HoC />}></Route>
        <Route path="/function-class" element={<FunctionInsideClass />} />
        <Route path="/custom-hooks2" element={<DarkModeToggle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
