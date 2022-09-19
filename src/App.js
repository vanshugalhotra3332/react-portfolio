import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Qualification from "./Components/Qualification/Qualification";
import Scrollup from "./Components/Scrollup/Scrollup";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </div>
  );
}

export default App;
