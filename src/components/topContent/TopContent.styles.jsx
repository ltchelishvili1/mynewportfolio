import styled from "styled-components";




export const Label = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
`;

export const LogoWrapper = styled.a`
transition: transform .2s;
opacity: 0.8;
    &:hover{
        transform: scale(1.2);
        opacity: 1;
    }
`

export const Span = styled.span`
  background: #333;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  transition: 0.5s;
  border-radius: 30px;
  border: 1px solid white;

  &::before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 1.4em;
    border-radius: 50%;
    left: 10%;
    bottom: 15%;
    box-shadow: inset 8px -4px 0px 0px #fff000;
    transition: 0.5s;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Span} {
    background-color: #522ba7;
  }
  &:checked + ${Span}::before {
    transform: translateX(100%);
    box-shadow: inset 15px -4px 0px 15px #fff000;
  }
`;

export const Txt = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 80%;
  margin-top: 5rem;
  position: absolute;
  top: -75px;
  left: 75%;
  z-index: 10;
  height: 60px;

  @media (max-width: 768px) {
  left: 40%;
}


`;
