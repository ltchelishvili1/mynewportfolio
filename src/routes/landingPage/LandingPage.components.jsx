import React, { useEffect } from "react";

import Typewriter from "typewriter-effect";
import anim from "./63921-developer.json";
import LottieModal from "../../components/lottieModal/LottieModal-component";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  HeaderContainer,
  ImageContainer,
  Span,
  Text,
  TextContainer,
} from "./LandingPage.styles";
import styled from "styled-components";


const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <HeaderContainer>
      <TextContainer data-aos="fade-right">
        <Text>Hello,</Text>
        <Text>
          I'm {" "}
          <Span>
           Levani
          </Span>
        </Text>
        <Text>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Web Developer.")
                .pauseFor(4000)
                .deleteAll()
                .start();
            }}
            options={{
              autoStart: true,
              loop: true,
            }}
          />
        </Text>
      </TextContainer>
      <ImageContainer data-aos="zoom-out">
        <LottieModal animJSON={anim} notThis={true} />
      </ImageContainer>
    </HeaderContainer>
  );
};

export default LandingPage;

export const NameP = styled.p`

  color: rgb(0, 0, 255);

  &::after {
    position: absolute;
    content: "Levani";
    left: 0px;
    transform: translate(3px, 3px);
    mix-blend-mode: screen;
    color: rgb(0, 255, 0);
    width: 100%;
  }

  &::before {
    position: absolute;
    content: "Levani";
    left: 0px;
    transform: translate(5px, 5px);
    mix-blend-mode: screen;
    color: rgb(255, 0, 0);
    width: 100%;
  }
`;
