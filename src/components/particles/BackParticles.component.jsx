import { useCallback } from "react";

import { loadFull } from "tsparticles";

import { ParticleContainer, Particle } from "./BackParticles.styles";

const BackParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <ParticleContainer>
      <Particle
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: "#000",
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 10,
              },
              repulse: {
                distance: 100,
              },
            },
          },
          particles: {
            links: {
              enable: true,
              distance: 100,
            },
            move: {
              enable: true,
              speed: { min: 1, max: 5 },
            },
            opacity: {
              value: { min: 0.3, max: 0.7 },
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
      />
    </ParticleContainer>
  );
};

export default BackParticles;
