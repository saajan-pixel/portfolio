import { useState } from "react";
import "./topbar.scss";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  const [activeId, setActiveId] = useState(1);
  const navList = [
    { id: 1, text: "Home", href: "#intro" },
    { id: 2, text: "About", href: "#about" },
    { id: 3, text: "Portfolio", href: "#portfolio" },
    { id: 4, text: "Contact", href: "#contact" },
  ];

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
            {navList.map((item) => (
              <li key={item.id} onClick={() => setActiveId(item.id)}>
                <a
                  href={item.href}
                  className={activeId === item.id ? "Active" : "Inactive"}
                >
                  {item.text}
                </a>
              </li>
            ))}
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
