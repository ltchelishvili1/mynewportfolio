import React, { useState, useEffect } from "react";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import {
  QuestionCont,
  MainCont,
  Tittle,
  Button,
  AnswerContainer,
  Answer,
} from "./Question-styles";

import AOS from "aos";
import "aos/dist/aos.css";

const Question = ({ title, answer, icon, isOpen, setIsOpen }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <MainCont>
      <QuestionCont onClick={handleClick}>
        <span>{icon}</span>
        <Tittle> {title}</Tittle>

        <Button>
          {showAnswer ? (
            <AiOutlineMinus color="red" />
          ) : (
            <AiOutlinePlus color="#1f93ff" />
          )}
        </Button>
      </QuestionCont>
      <AnswerContainer>
        {showAnswer && <Answer data-aos="fade-down">{answer}</Answer>}
      </AnswerContainer>
    </MainCont>
  );
};

export default Question;
