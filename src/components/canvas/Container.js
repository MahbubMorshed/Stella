import React, { Suspense } from "react";
// import "./style.css";

import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";
import {
  AccumulativeShadows,
  Environment,
  OrbitControls,
  Preload,
  RandomizedLight,
} from "@react-three/drei";
import Model from "./Model";

function Container() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 75,
        near: 0.1,
        far: 200,
        position: [-4, 3, 40],
      }}
    >
      {/* <ambientLight intensity={0.5} /> */}
      <spotLight
        position={[0, 15, 0]}
        angle={0.9}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />

      <RandomizedLight
        amount={8}
        radius={10}
        ambient={0.5}
        position={[5, 10, -5]}
      />

      {/* <directionalLight
        castShadow
        position={[-5, 6, 10]}
        intensity={0.5}
        shadow-normalBias={0.04}
      /> */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          makeDefault
          autoRotate
          // enableZoom={false}
          // maxPolarAngle={Math.PI / 3.5}
          // minPolarAngle={Math.PI / 3.5}
        />

        <Model />
        <Environment preset="warehouse" />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

export default Container;
