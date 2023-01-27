import React, { useEffect } from "react";

import LottieModal from "../lottieModal/LottieModal-component";
import HTMLLogo from "./htmlLottie.json";
import CSSLogo from "./cssLottie.json";
import FrontEndLanguages from "./FrontEndLanguages";
import JavascriptLottie from "./JavascriptLottie";
import ReactLogoLottie from "./ReactLogoLottie";

import { SkillsPageContainer, Cont, ListContainer } from "./SkillsPage.styles";

import AOS from "aos";
import "aos/dist/aos.css";

const SkillsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <SkillsPageContainer data-aos="zoom-out">
      <Cont>
        <div>
          <p>Professional At:</p>
          <p>Html</p>
          <p>Css</p>
          <p>Javascript</p>
          <p>React</p>
        </div>
        <LottieModal
          animJSON={FrontEndLanguages}
          styles={{ width: "300px" }}
          notThis={true}
        />
        <div>
          <p>Basic Knowledge:</p>
          <p>Express.js</p>
          <p>PHP</p>
          <p>Java</p>
          <p>MongoDb,GraphQL</p>
        </div>
      </Cont>

      <ListContainer>
        <Cont>
          <LottieModal animJSON={HTMLLogo} styles={{ width: "150px" }} />
        </Cont>
        <Cont>
          <LottieModal
            animJSON={CSSLogo}
            styles={{ width: "170px", transform: "translateY(-10%)" }}
          />
        </Cont>
        <Cont>
          <LottieModal
            animJSON={JavascriptLottie}
            styles={{ width: "150px" }}
          />
        </Cont>
        <Cont>
          <LottieModal animJSON={ReactLogoLottie} styles={{ width: "150px" }} />
        </Cont>
      </ListContainer>
    </SkillsPageContainer>
  );
};

export default SkillsPage;
