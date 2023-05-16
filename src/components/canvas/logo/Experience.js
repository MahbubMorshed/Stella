import { Environment, OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import Logo from "./Model";
import "./logo.css";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export default function Experience() {
  return (
    <>
      <Suspense fallback={null}>
        <mesh>
          <Logo />
        </mesh>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -5]} color="#ooffff" />
        <ambientLight intensity={0.4} />
        <Environment preset="warehouse" />
      </Suspense>
    </>
  );
}
