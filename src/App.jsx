import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    { path: "", element: <Hero /> },
    { path: "home", element: <Hero /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
    { path: "services", element: <Portfolio /> },
  ]);
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
