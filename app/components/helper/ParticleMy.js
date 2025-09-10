
"use client";

import React from "react";
import Particles from "react-particles";
import { Background, Engine } from "tsparticles-engine";
import { loadFirePreset } from "tsparticles-preset-fire";

export class ParticlesContainer extends React.PureComponent {
  // this customizes the component tsParticles installation
 customInit=async(engine=Engine)=> {
    // this adds the preset to tsParticles, you can safely use the
    await loadFirePreset(engine);
  }

  render() {
    const options = {
      preset: "fire",
      Background:"pink"
    };

    return <Particles options={options} init={this.customInit} />;
  }
}