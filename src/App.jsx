import { useContext, useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar-component";
import BackParticles from "./components/particles/BackParticles.component";
import LandingPage from "./components/landingPage/LandingPage.components";
import SkillsPage from "./components/SkillsPage/SkillsPage-component";
import Faq from "./components/faq/Faq-component";
import ProjectsPage from "./components/projectspage/ProjectsPage";
import ContactPage from "./components/contact/ContactPage-component";
import TopContent from "./components/topContent/TopContent";

import { ModeContext } from "./contexts/ModeContext";

import { AppContainer } from "./App.styles";

function App() {
  const { toggleMode, isDark } = useContext(ModeContext);

  let routes = (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/about" element={<Faq />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  useEffect(() => {
    localStorage.setItem("dark-mode", isDark);
  }, [isDark]);

  return (
    <>
      {
        // <BackParticles />
      }
      <div>
        <TopContent isDark={isDark} toggleMode = {toggleMode} />
        <AppContainer isLight={isDark}>
          <Router>
            <Navbar />
            <main>{routes}</main>
          </Router>
        </AppContainer>
      </div>
    </>
  );
}

export default App;
