import React, { useState } from "react";

import Main from "../../components/Main/Main";
import Text from "../../components/UI/Text/Text";
import H5 from "../../components/UI/H5/H5";
import H4 from "../../components/UI/H4/H4"
import H3 from "../../components/UI/H3/H3";

import vehicle from "./../../assets/technology/image-launch-vehicle-portrait.jpg";
import capsule from "./../../assets/technology/image-space-capsule-portrait.jpg";
import Spaceport from "./../../assets/technology/image-spaceport-portrait.jpg";

import data from "./../../json/data";

import "./technology.scss";

const slides = [
  { id: 1, name: "Launch vehicle" },
  { id: 2, name: "Spaceport" },
  { id: 3, name: "Space capsule" },
];

function Technology({ children }) {
  const res = data;
  const technologyPage = res.technology;
  // eslint-disable-next-line
  const [technologyAll, setTechnologyAll] = useState(technologyPage);
  const [technology, setTechnology] = useState({
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  });

  const handle = {
    getTechnology: (e) => {
      let name = e.target.dataset.name;
      let currentTechnology = technologyAll.find((el) => el.name === name);
      if (currentTechnology) {
        setTechnology(currentTechnology);
      }
    },
  };

  return (
    <div className="technology">
      {children}
      <Main className="padding-destination">
        <div className="content-header ">
          <H5 className="content-header--number">03</H5>
          <H5>SPACE LAUNCH 101</H5>
        </div>

        <div className="content technology__content padding-technology">
          <div className="technology-slider ">
            <div className="technology-slider__nav">
              {slides.map((slide) => (
                <span
                  data-name={slide.name}
                  onClick={(e) => handle.getTechnology(e)}
                  key={slide.id}
                  className={`technology-slider__nav--btn j5 ${
                    slide.name === technology.name &&
                    "technology-slider__nav--btn--active"
                  }`}
                >
                  <H4
                    data-name={slide.name}
                    onClick={(e) => handle.getTechnology(e)}
                  >
                    {slide.id}
                  </H4>{" "}
                </span>
              ))}
            </div>

            <div className="technology-slider__content">
              <H5 className="technology-slider__content-supheader subhead-h2">
                THE TERMINOLOGY…
              </H5>
              <H3 className="technology-slider__content-header">
                {technology.name}
              </H3>
              <Text className="technology-slider__content-text">
                {technology.description}
              </Text>
            </div>

            <img
              src={
                technology.name === "Launch vehicle"
                  ? vehicle
                  : technology.name === "Spaceport"
                  ? Spaceport
                  : capsule
              }
              alt="technologys"
              className="tech-img"
            />
          </div>
        </div>
      </Main>
    </div>
  );
}

export default Technology;
