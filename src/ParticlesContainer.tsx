import React, { useEffect } from "react";
import styled from "styled-components";
import { tsParticles } from "tsparticles";
import particlesConfig from "./particles.config";

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.5;
`;

const ParticlesContainer = () => {
  const initParticles = async () => {
    tsParticles.load("tsparticles", particlesConfig).then();
    const particles = tsParticles.domItem(0);
    particles?.play();
  };
  useEffect(() => {
    initParticles();
  }, []);
  return (
    <Container>
      <div id="tsparticles" />
    </Container>
  );
};

export default ParticlesContainer;
