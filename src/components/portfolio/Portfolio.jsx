import { useEffect, useState } from "react";
import PortfolioList from "../portfoliolist/PortfolioList";
import "./portfolio.scss";

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const lists = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web app",
      title: "Web App",
    },
    {
      id: "mobile app",
      title: "Mobile App",
    },
    // {
    //   id: 'design',
    //   title: "Design"
    // },
    // {
    //   id: 'branding',
    //   title: "Branding"
    // }
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "web app":
        setData(webPortfolio);
        break;

      case "mobile app":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "branding":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-wrapper">
        <ul>
          {lists.map((list) => (
            <PortfolioList
              key={list.id}
              title={list.title}
              id={list.id}
              active={selected === list.id}
              setSelected={setSelected}
            />
          ))}
        </ul>

        <div className="container">
          {data.map((item) => (
            <div className="item" key={item.id}>
              <img src={item.img} alt="p-img" />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
