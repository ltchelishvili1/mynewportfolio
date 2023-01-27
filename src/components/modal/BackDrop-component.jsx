import React, { useEffect } from "react";

import { AnimatePresence } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

import LottieModal from "../lottieModal/LottieModal-component";

import Celebration from "./Celebration.json";

import { MotionDiv, ModalCont, Mess } from "./BackDrop-styles";

const BackDrop = ({ onClick, isVisible }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const styles = {
    width: "300px",
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionDiv
          onClick={onClick}
          initial={{ opacity: 0, transform: "translateX(-100%)" }}
          animate={{ opacity: 1, transform: "translateX(0%)" }}
          exit={{ opacity: 0 }}
        >
          <ModalCont>
            <Mess data-aos="zoom-out">Message Sent Succesfully!</Mess>
            <LottieModal animJSON={Celebration} styles={styles} />
          </ModalCont>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default BackDrop;
