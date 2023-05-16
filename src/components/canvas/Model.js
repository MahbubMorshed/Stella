import { useGLTF } from "@react-three/drei";

import React from "react";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Aura.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.01, -5, 0.03]} scale={8}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AURA_1.geometry}
          material={materials.body}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AURA_2.geometry}
          material={materials.chrome}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.STELLA_LOGO_3D003.geometry}
        material={materials.logo}
        position={[0.01, -5, 0.03]}
        scale={8}
      />
    </group>
  );
}

useGLTF.preload("/Aura.glb");

export default Model;
