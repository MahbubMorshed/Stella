import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

function Logo() {
  return (
    <div className="logo">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, -0.75, 2], fov: 75, near: 0.1 }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}

export default Logo;
