import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import PortfolioImg from "../../assets/svg/programming.svg";

const Intro = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) {
      return;
    }
    init(textRef.current, {
      showCursor: false,
      strings: ["Front-End Developer", "Freelancer"],
    });
  }, [textRef]);

  return (
    <div className="intro" id="intro">
      <div className="intro-right">
        <div className="right-wrapper">
          <h2>Hi, I'm</h2>
          <h1>Saajan Shrestha</h1>
          <div className="ityped" ref={textRef}></div>
        </div>
      </div>
      <div className="intro-left">
        <div className="imgContainer">
          <img src={PortfolioImg} alt="intro-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
