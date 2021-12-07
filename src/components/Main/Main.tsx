import React from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import { MainProps } from "../../types/types";

import "./main.scss";

const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 1s ${FadeInAnimation};
`;

function Main({ className, children }: MainProps):JSX.Element {
  if (!children) console.error('missing children prop');

  return (
    <FadeInDiv id="style-1 wow-effect" className={`main ${className}`}>
      {children}
    </FadeInDiv>
  );
}

export default Main;
