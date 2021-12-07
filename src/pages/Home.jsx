import React, { useEffect } from "react";
import Main from "../components/Main/Main";
import RoundButton from "../components/UI/RoundButton";
import useSound from "use-sound";
import boopSfx from "./../components/Main/main.mp3";
import "./home.scss";

function Home({ children }) {
  const [play] = useSound(boopSfx);

  useEffect(() => {}, []);

  return (
    <>
      <div className="home" onClick={play}>
        {children}
        <Main className="padding-home">
          <div className="home__holder">
            <div className="home__holder-content">
              <h5 className="home__holder-content--supheader">
                SO, YOU WANT TO TRAVEL TO
              </h5>
              <h1>space</h1>
              <span className="text-basic">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </span>
            </div>
            <div className="home__holder-button j2">
              <RoundButton />
            </div>
          </div>
        </Main>
      </div>
    </>
  );
}

export default Home;
