import React, { useState } from "react";
import Main from "../components/Main/Main";
import data from "./../json/data";
import Douglas from "./../assets/crew/image-douglas-hurley.png";
import Mark from "./../assets/crew/image-mark-shuttleworth.png";
import Victor from "./../assets/crew/image-victor-glover.png";
import anousheh from "./../assets/crew/image-anousheh-ansari.png";
import "./crew.scss";

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
          <h5 className="content-header--number">02</h5>
          <h5>Meet your crew</h5>
        </div>

        <div className="content padding-crew">
          <div className="crew-slider">
            <h4 className="crew-slider__supheader">{member.role}</h4>
            <h3 className="crew-slider__header">{member.name}</h3>
            <p className="crew-slider__text text-basic">{member.bio}</p>
            <div className="slider-navigation">
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
          <img
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
        </div>
      </Main>
    </div>
  );
}

export default Crew;
