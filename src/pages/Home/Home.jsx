import React, { useEffect } from "react";
import Main from "./../../components/Main/Main";
import RoundButton from "./../../components/UI/RoundButton/RoundButton";
import useSound from "use-sound";
import boopSfx from "./../../assets/sound/main.mp3";
import "./home.scss";
import Text from "../../components/UI/Text/Text";
import H1 from "../../components/UI/H1/H1";
import H5 from "../../components/UI/H5/H5";

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
              <H5 className='home__holder-content--supheader'>
                SO, YOU WANT TO TRAVEL TO
                </H5>
              <H1>space</H1>
              <Text>
              Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </Text>
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
