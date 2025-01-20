import Home from "seceFrontend\src\components\FunctionalComponents\Home.jsx";
import About from "seceFrontend\src\components\FunctionalComponents\About.jsx";
import ClassCompEG from "seceFrontend\src\components\classComponents";
import Gallery from "seceFrontend\src\components\FunctionalComponents\Gallery.jsx";
import Contact from "seceFrontend\src\components\FunctionalComponents\Contact.jsx";
function App() {
  return (
    <section>
      <Home />
      <About />
     
      <Contact/>
      <ClassCompEG />
    </section>
  );
}

export default App;