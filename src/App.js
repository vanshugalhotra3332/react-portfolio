import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;
