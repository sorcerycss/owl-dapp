import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { Mesh } from "three";

/**
 * Procedural low-poly owl head — built entirely from primitive geometries
 * (spheres, cones) so there's no external .glb/.obj asset to load or host.
 * Swap this out later for a real modeled asset if you want higher fidelity.
 */
function OwlHeadModel() {
  const groupRef = useRef<Mesh>(null);

  // Gentle idle rotation so the head feels alive without user input
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef as never}>
      {/* Head */}
      <mesh castShadow position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#3d3450" roughness={0.6} />
      </mesh>

      {/* Ear tufts */}
      <mesh castShadow position={[-0.55, 0.85, 0]} rotation={[0, 0, -0.3]}>
        <coneGeometry args={[0.18, 0.5, 8]} />
        <meshStandardMaterial color="#3d3450" roughness={0.6} />
      </mesh>
      <mesh castShadow position={[0.55, 0.85, 0]} rotation={[0, 0, 0.3]}>
        <coneGeometry args={[0.18, 0.5, 8]} />
        <meshStandardMaterial color="#3d3450" roughness={0.6} />
      </mesh>

      {/* Eye discs (the classic owl "facial disc" look) */}
      <mesh position={[-0.42, 0.05, 0.85]}>
        <circleGeometry args={[0.38, 32]} />
        <meshStandardMaterial color="#f4f1e8" roughness={0.8} />
      </mesh>
      <mesh position={[0.42, 0.05, 0.85]}>
        <circleGeometry args={[0.38, 32]} />
        <meshStandardMaterial color="#f4f1e8" roughness={0.8} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.42, 0.05, 1.05]}>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshStandardMaterial
          color="#14f195"
          emissive="#14f195"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[0.42, 0.05, 1.05]}>
        <sphereGeometry args={[0.16, 16, 16]} />
        <meshStandardMaterial
          color="#14f195"
          emissive="#14f195"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Beak */}
      <mesh position={[0, -0.25, 0.95]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.15, 0.35, 4]} />
        <meshStandardMaterial color="#e0a640" roughness={0.4} />
      </mesh>
    </group>
  );
}

export default function OwlHead() {
  return (
    <div style={{ width: "100%", height: "360px" }}>
      <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[3, 4, 5]}
          intensity={1.2}
          castShadow
        />
        <pointLight position={[-3, -2, 2]} intensity={0.3} color="#9945ff" />
        <OwlHeadModel />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.7}
        />
      </Canvas>
    </div>
  );
}
