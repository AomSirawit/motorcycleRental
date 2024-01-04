import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import New from "./Components/New";
import Rent from "./Components/Rent";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";
import { Element } from "react-scroll";


function App() {
  return (
    <>
      <Navbar/>

      <Element name="home">
      <Home/>
      </Element>

      <Element name="new">
      <New/>
      </Element>

      <Element name="rent">
      <Rent/>
      </Element>

       <Element name="contact">
      <Contact/>
      </Element>
      <Footer/>


  
    
    </>
  );
}

export default App;
