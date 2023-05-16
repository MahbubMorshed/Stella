import React, { Suspense } from "react";
import {
  Center,
  Float,
  OrbitControls,
  Preload,
  PresentationControls,
  Text3D,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import CanvasLoader from "../Loader";

const Text = () => {
  return (
    <>
      {/* <color args={["#252771"]} attach="background" /> */}

      <Center>
        <PresentationControls global polar={[-0.4, 0.2]} azimuth={[-0.2, 0.1]}>
          <Float>
            <Text3D
              font="./helvetiker_regular.typeface.json"
              size={0.75}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              Mahbub
              <meshNormalMaterial />
            </Text3D>
          </Float>
        </PresentationControls>
      </Center>
    </>
  );
};

function TextCanvas() {
  return (
    <div style={{ width: "200px", height: "150px" }}>
      <Canvas
        shadows
        camera={{ fov: 30, near: 0.1, far: 100, position: [0, 1, 6] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          /> */}
          <Text />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default TextCanvas;
