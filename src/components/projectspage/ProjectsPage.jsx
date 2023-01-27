import React, { useEffect } from "react";

import SliderComponent from "../slider/slider.component";

import { ProjectContainer } from "./ProjectsPage.styles";

import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <ProjectContainer  data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <p  data-aos="fade-left"
   >Projects So Far</p>
      <SliderComponent  />
    </ProjectContainer>
  );
};

export default ProjectsPage;
