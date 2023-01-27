
import styled, { css } from "styled-components";

export const AppContainer = styled.div`
width: 100%;
height: 80%;
margin-top: 5rem;
position: absolute;
top: 0;
left: 0;
background: #0b0b0b;
border-radius: 10px;
transform: translateX(15%);

@media (max-width: 768px) {
  scale: 1.1;
}

${({ isLight }) =>
  isLight &&
  css`
    background-color: white;
    filter: brightness(90%);
    a,
    p,
    h1,
    h2,
    h3,
    h4,
    span,
    label,
    input,
    textarea {
      color: black;
    }
  `};
`;
