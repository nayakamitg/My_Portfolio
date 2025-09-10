"use client";

import dynamic from "next/dynamic";

const Particle1 = dynamic(() => import("./ParticleMy"));

export default function ParticleWrapper() {
  return <Particle1 />;
}
