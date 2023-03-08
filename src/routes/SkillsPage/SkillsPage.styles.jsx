import styled from "styled-components";

export const Image = styled.img`
  width: 240px;
  height: 240px;
`;

export const SkillsPageContainer = styled.div`
  width: 100%;
  height: 100px;
  @media (max-width: 1920px) {
   scale: .8;
  }
`;

export const Cont = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 800px) {
    p {
      display: none;
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
 
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;

