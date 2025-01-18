import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Hero />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
