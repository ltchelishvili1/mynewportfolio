import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  place-items: center;
  height: 75vh;
  grid-template-columns: 50% 50%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translate(-6%,-8%);

  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(-10%);
  margin-left: 3rem;
  align-items: center;
  font-size: 40px;

  @media (max-width: 768px) {
    order: 2;
    font-size: 20px;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3rem;
  width: 70%;


  @media (max-width: 768px) {
    width: 80%;
    order: 1;
  }
`;

export const Text = styled.p`
  width: 350px;
  height: 10px;
  
  @media (max-width: 768px) {
    width: auto;
  }
`;

export const Span = styled.span`
  background-image: linear-gradient(
    -225deg,
    #3700ff 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 5s linear infinite;
  display: inline-block;
  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;

export const Image = styled.img`
  width: 75%;
  border-radius: 20px;
  transform: translateY(-10%);
  opacity: 0.8;
`;
