import styled, { css } from "styled-components";

import { motion } from "framer-motion";

import LottieModal from "../lottieModal/LottieModal-component";

export const Cont = styled.div`
  display: flex;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
  }
`;

export const CustLottie = styled(LottieModal)`
  @media (max-width: 800px) {
    order: 1;
  }
  
`

export const ErrorText = styled.p`
  color: red !important;
  font-size: 10px;
`;

export const InputCont = styled.div`
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 500px;
  gap: 1rem;
  @media (max-width: 800px) {
    order: 2;
  }
`;

export const Label = styled.label`
  color: white;
  @media (max-width: 800px) {
    font-size: 10px;
    height: 5px;
  }
`;

export const Input = styled.input`
  border: 0.3px solid #1f93ff;
  background: transparent;
  width: 300px;
  height: 30px;
  
  color: white;

  ${({ isValid }) =>
    isValid &&
    css`
      border: 0.3px solid red;
    `}

  
    @media (max-width: 800px) {
    max-width: 260px;
  }
`;

export const Button = styled(motion.button)`
  width: 180px;
  height: 30px;
  margin: auto;
  background-color: #1f93ff;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: #62b3fe;
  }
`;

export const TextArea = styled.textarea`
  border: 0.3px solid #1f93ff;
  background: transparent;
  width: 300px;
  height: 70px;
  color: white;
  ${({ isValid }) =>
    isValid &&
    css`
      border: 0.3px solid red;
    `}

    @media (max-width: 800px) {
    max-width: 260px;
    height: 50px;
  }
`;
