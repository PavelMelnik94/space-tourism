import React from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";

import "./main.scss";

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

function Main({ className, children }) {
  return (
    <FadeInDiv id="style-1 wow-effect" className={`main ${className}`}>
      {children}
    </FadeInDiv>
  );
}

export default Main;
