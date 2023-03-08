import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

export const SwiperCont = styled(Swiper)`
  width: 70%;
  height: 400px;
  @media (max-width: 728px) {
    scale: 1.1 0.9 ;
  }
  @media (max-width: 1920px) {
    scale: 1.2 0.7 ;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  
`;

export const ImgCont = styled.div`
  left: 100px;
  width: 100%;
  height: 100%;
  background-size: contain;
  @media (max-width: 728px) {
    left: 0px;
    width: 100%;
    
 
  }
  
`;

export const Button = styled.button`
  display: none;
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%);
  min-width: 165px;
  width: 300px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: white;
  color: black;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #1f93ff;;
    color: white;
    border: 1px solid #1f93ff;;
  }
  
`;

export const CustSlider = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  opacity: 1;
  &:hover {
    ${Image} {
      transition: .5s;
      opacity: 0.7;
    }
    ${Button} {
      transition: .5s;
      opacity: 1;
      display: block;
    }
  }
  @media (max-width: 1025px) {
    scale: 0.8;
  }

  @media (max-width: 728px) {
    scale:  0.9 ;
  }
 
`;
