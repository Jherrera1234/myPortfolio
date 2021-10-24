import Particles from "react-particles-js";
import ParticleConfig from '../ParticleConfig.js'
import "./ParticleBackground.css";

export default function ParticleBackground() {
  return (
    <div className="particles-container">
      <Particles
        className="particles"
        params={ParticleConfig}
      />
    </div>
  );
};