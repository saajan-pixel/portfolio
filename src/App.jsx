import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import useGaTracker from "./useGaTracker";
// import Testimonials from './components/testimonials/Testimonials';
// import Works from './components/works/Works'
import Contact from "./components/contact/Contact";
import { useEffect, useState } from "react";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import ReactGA from "react-ga";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  return (
    <main className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        {/* <Works/> */}

        <Contact />
      </div>
    </main>
  );
}

export default App;
