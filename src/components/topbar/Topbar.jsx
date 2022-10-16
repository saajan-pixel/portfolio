import { useRef } from "react";
import "./topbar.scss";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  const anchor = useRef();
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            portfolio.
          </a>
        </div>

        <div className="right">
          <ul className="right-list">
            <li>
              <a href="#intro" ref={anchor}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" ref={anchor}>
                About
              </a>
            </li>

            <li>
              <a href="#portfolio" ref={anchor}>
                Portfolio
              </a>
            </li>

            <li>
              <a href="#contact" ref={anchor}>
                Contact
              </a>
            </li>
          </ul>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
