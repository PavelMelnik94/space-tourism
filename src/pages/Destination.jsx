import React, { useState, useEffect } from "react";
import Main from "../components/Main/Main";
import data from "./../json/data";
import "./destination.scss";
import Mars from "./../assets/destination/image-mars.png";
import Moon from "./../assets/destination/image-moon.png";
import Titan from "./../assets/destination/image-titan.png";
import Europa from "./../assets/destination/image-europa.png";

const tabs = [
  { id: 1, name: "Moon" },
  { id: 2, name: "Mars" },
  { id: 3, name: "Europa" },
  { id: 4, name: "Titan" },
];

function Destination({ children }) {
  const res = data;
  const destinationPage = res.destinations;

  const [allPlanets, setAllPlanets] = useState(destinationPage);
  const [planetInfo, setPI] = useState({
    name: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  });

  const handle = {
    getPlanet: (e) => {
      let name = e.target.innerHTML;
      let currentPlanet = allPlanets.find((el) => el.name === name);
      if (currentPlanet) {
        setPI(currentPlanet);
      }
    },
  };
  return (
    <div className="destination">
      {children}
      <Main className="padding-destination">
        <div className="destination__header ">
          <h5 className="destination__header-number">01</h5>
          <h5>Pick your destination</h5>
        </div>

        <div className="destination__content ">
          <img
            src={
              planetInfo.name === "Moon"
                ? Moon
                : planetInfo.name === "Mars"
                ? Mars
                : planetInfo.name === "Europa"
                ? Europa
                : Titan
            }
            alt="planet"
            className="destination__content__img j2"
          />
          <div className="destination__content__tab">
            <div className="destination__content__tab-nav">
              {tabs.map((tab) => (
                <span
                  key={tab.id}
                  className={`destination__content__tab-nav__item j5  ${
                    tab.name === planetInfo.name && "active"
                  }`}
                >
                  <h5
                    onClick={(e) => handle.getPlanet(e)}
                    className="tab-nav-item"
                  >
                    {tab.name}
                  </h5>
                </span>
              ))}
            </div>

            <h2 className="destination__content__tab__planet-name">
              {planetInfo.name}
            </h2>

            <p className="text-basic">{planetInfo.description}</p>

            <hr />
            <div className="destination__content__tab__distance j4">
              <div className="destination__content__tab__distance__holder">
                <span className="destination__content__tab__distance-supheader distance ">
                  AVG. DISTANCE
                </span>
                <h4 className="destination__content__tab__distance-info">
                  {planetInfo.distance}
                </h4>
              </div>

              <div className="destination__content__tab__distance__holder">
                <span className="destination__content__tab__distance-supheader distance ">
                  Est. travel time
                </span>
                <h4 className="destination__content__tab__distance-info">
                  {planetInfo.travel}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
}

export default Destination;
