import styled from "styled-components";

export const Answer = styled.p`
 @media (max-width: 800px) {  
   font-size: 12px;
  }
`

export const QuestionCont = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const MainCont = styled.div`
  width: 70%;
  border: 1px solid #1f93ff;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

export const Tittle = styled.h4`
  width: 70px;
  pointer-events: none;
`;

export const AnswerContainer = styled.div`
  margin: 0 1rem;
`;
