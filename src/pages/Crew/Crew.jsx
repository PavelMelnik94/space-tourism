import React, { useState } from "react";
import Main from "../../components/Main/Main";
import data from "./../../json/data";
import Douglas from "./../../assets/crew/image-douglas-hurley.png";
import Mark from "./../../assets/crew/image-mark-shuttleworth.png";
import Victor from "./../../assets/crew/image-victor-glover.png";
import anousheh from "./../../assets/crew/image-anousheh-ansari.png";
import H5 from "../../components/UI/H5/H5";
import H4 from "../../components/UI/H4/H4"
import H3 from "../../components/UI/H3/H3";
import "./crew.scss";
import Text from "../../components/UI/Text/Text";

const slides = [
  { id: 1, name: "Douglas Hurley" },
  { id: 2, name: "Mark Shuttleworth" },
  { id: 3, name: "Victor Glover" },
  { id: 4, name: "Anousheh Ansari" },
];

function Crew({ children }) {
  const res = data;
  const crewPage = res.crew;
  // eslint-disable-next-line
  const [crew, setCrew] = useState(crewPage);
  const [member, setMember] = useState({
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  });

  const handle = {
    getMember: (e) => {
      let name = e.target.dataset.name;
      let currentMember = crew.find((el) => el.name === name);
      if (currentMember) {
        setMember(currentMember);
      }
    },
  };
  return (
    <div className="crew">
      {children}
      <Main className="padding-destination">
        <div className="content-header ">
          <H5 className="content-header--number">02</H5>
          <H5>Meet your crew</H5>
        </div>

        <div className="content padding-crew">
          <div id="slider" className="crew-slider">
            <H4 className="crew-slider__supheader">{member.role}</H4>
            <H4 className="crew-slider__header">{member.name}</H4>
            <Text className="crew-slider__text">{member.bio}</Text>
            <div id="navigation" className="slider-navigation">
              {slides.map((slide) => (
                <span
                  key={slide.id}
                  onClick={(e) => handle.getMember(e)}
                  className={`slider-navigation_dot ${
                    slide.name === member.name && "dot-active"
                  }`}
                  data-name={slide.name}
                ></span>
              ))}
            </div>
          </div>
          <div>
            <img
              id="hero"
              src={
                member.name === "Douglas Hurley"
                  ? Douglas
                  : member.name === "Mark Shuttleworth"
                  ? Mark
                  : member.name === "Victor Glover"
                  ? Victor
                  : anousheh
              }
              alt="crew"
              className="crew__image"
            />
            <hr className="crew__image_divider" />
          </div>
        </div>
      </Main>
    </div>
  );
}

export default Crew;
