import React from "react";

import { Txt, Label, Input, Span, LogoWrapper } from "./TopContent.styles";

import { BsFacebook, BsGithub } from "react-icons/bs";
import { SiNetlify } from "react-icons/si";

const TopContent = ({ isDark, toggleMode }) => {
  return (
    <Txt>
      <Label>
        <Input type="checkbox" checked={isDark} onClick={toggleMode} />
        <Span></Span>
      </Label>
      <div style={{ display: "flex", gap: "10px" }}>
        <LogoWrapper href="https://www.facebook.com/profile.php?id=100012559183904">
          <BsFacebook color="white" size={30} />
        </LogoWrapper>
        <LogoWrapper href="https://github.com/ltchelishvili1">
        
          <BsGithub color="white" size={30} />
        </LogoWrapper>
        <LogoWrapper href="https://app.netlify.com/teams/ltchelishvili1/overview">
          
          <SiNetlify color="white" size={30} />
        </LogoWrapper>
      </div>
    </Txt>
  );
};

export default TopContent;
