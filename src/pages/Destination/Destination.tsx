import React, { useState } from "react";

import Text from "../../components/UI/Text/Text";
import Main from "../../components/Main/Main";
import H5 from "../../components/UI/H5/H5";
import H4 from "../../components/UI/H4/H4";
import H2 from "../../components/UI/H2/H2";

import Mars from "./../../assets/destination/image-mars.png";
import Moon from "./../../assets/destination/image-moon.png";
import Titan from "./../../assets/destination/image-titan.png";
import Europa from "./../../assets/destination/image-europa.png";

import data from "./../../json/data.json";

import "./destination.scss";
import { DestinationData } from "../../types/types";

interface TabsData {
  id: number,
  name: string
}

const tabs: TabsData[] = [
  { id: 1, name: "Moon" },
  { id: 2, name: "Mars" },
  { id: 3, name: "Europa" },
  { id: 4, name: "Titan" },
];


interface ITabsProps {
  children: React.ReactNode
}

function Destination({ children }: ITabsProps): JSX.Element {
  const res = data;
  const destinationPage: DestinationData[] = res.destinations;
  // eslint-disable-next-line
  const [allPlanets, setAllPlanets] = useState(destinationPage);
  const [planetInfo, setPI] = useState<DestinationData>({
    name: "Moon",
    description: `See our planet as you’ve never seen it before. A perfect
    relaxing trip away to help regain perspective and come back refreshed.
     While you’re there, take in some history by visiting the Luna 2 and Apollo
    11 landing sites.`,
    distance: "384,400 km",
    travel: "3 days",
  });


  // event - (e: React.SyntheticEvent<HTMLButtonElement>)
  const handle = {
    getPlanet: (e: any) => {
      let name: string = e.target.innerHTML;
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
        <div className="content-header">
          <H5 className="content-header--number">01</H5>
          <H5>Pick your destination</H5>
        </div>

        <div className="content ">
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
              {tabs.map((tab): JSX.Element => (
                <span
                  key={tab.id}
                  className={`destination__content__tab-nav__item j5  ${
                    tab.name === planetInfo.name && "active"
                  }`}
                >
                  <H5
                    onClick={(e) => handle.getPlanet(e)}
                    className="tab-nav-item"
                  >
                    {tab.name}
                  </H5>
                </span>
              ))}
            </div>

            <H2 className="destination__content__tab__planet-name">
              {planetInfo.name}
            </H2>

            <Text >{planetInfo.description}</Text>

            <hr />
            <div className="destination__content__tab__distance j4">
              <div className="destination__content__tab__distance__holder">
                <span className="destination__content__tab__distance-supheader distance ">
                  AVG. DISTANCE
                </span>
                <H4 className="destination__content__tab__distance-info">
                  {planetInfo.distance}
                </H4>
              </div>

              <div className="destination__content__tab__distance__holder">
                <span className="destination__content__tab__distance-supheader distance ">
                  Est. travel time
                </span>
                <H4 className="destination__content__tab__distance-info">
                  {planetInfo.travel}
                </H4>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </div>
  );
}

export default Destination;
