"use client";

import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadFirePreset } from "@tsparticles/preset-fire";

export default function ParticlesContainer() {
  const [init, setInit] = useState(false);

  // initialize the engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFirePreset(engine); // load the fire preset
    }).then(() => {
      setInit(true);
    });
  }, []);

  // your fire preset options
  const options = useMemo(
    () => ({
      preset: "fire",
      background: {
        color: "pink", // background color must be an object, not string
      },
    }),
    []
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
}
