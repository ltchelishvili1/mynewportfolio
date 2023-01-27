import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 90% 10%;
  }
`;

export const Span = styled.span`
  color: #1f93ff !important;
`;

export const Text = styled.span`
  &:hover {
    color: #1f93ff ;
  }
`;

export const MobText = styled.span`
  &:hover {
    color: #1f93ff;
  }
  @media (max-width: 800px) {
    color: white !important;
  
  }
`;

export const FiMen = styled(FiMenu)`
  display: none;
  z-index: 60;
  @media (max-width: 800px) {
    display: block;
    transform: translateX(-30%);
    cursor: pointer;
  }
`;

export const GrClse = styled(VscChromeClose)`
  display: none;
  z-index: 60;
  @media (max-width: 800px) {
    display: block;

    cursor: pointer;
  }
`;
export const CustNavlink = styled(Link)`
  margin-left: 2rem;
`;

export const NavigationLinks = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: 50px;
  padding: 20px;
  &:nth-child(1) {
    padding-left: 3rem;
  }

  @media (max-width: 1400px) {
    gap: 30px;
  }

  @media (max-width: 1100px) {
    gap: 20px;
    font-size: 16px;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    backdrop-filter: blur(20px);
    z-index: 20;
    height: 400px;
    transform: translateX(5%);
    border: 1px solid #4e4e4e90;
    border-radius: 10px;
    animation: slidein 1000ms;
  }

  @keyframes slidein {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(5%);
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #4e4e4e;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
`;

export const NavigationLink = styled(Link)`
  width: 100%;
  display: inline-block;
  position: relative;
  &:hover {
    color: #1f93ff;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-bottom: 1rem;
    width: 80px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: #2146ff;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #1f93ff;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
    `};
`;
