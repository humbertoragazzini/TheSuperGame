import { RigidBody } from "@react-three/rapier";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Player({ position = [0, 10, 0] }) {
  return (
    <RigidBody
      position={position}
      colliders={"ball"}
      restitution={0.65}
      friction={1}
      canSleep={false}
    >
      <mesh>
        <icosahedronGeometry args={[0.5, 1]} />
        <meshPhysicalMaterial
          color="blue"
          transmission={0.9}
          transparent={true}
          thickness={0.8}
          roughness={0.1}
          reflectivity={0.8}
          metalness={0}
          ior={1.5}
        />
        <pointLight intensity={15} position={[0, 0.8, 0]} />
        <pointLight intensity={15} position={[0.8, 0, 0]} />
        <pointLight intensity={15} position={[-0.8, 0, 0]} />
        <pointLight intensity={15} position={[0, -0.8, 0]} />
        <pointLight intensity={15} position={[0, 0, 0.8]} />
        <pointLight intensity={15} position={[0, 0, -0.8]} />
      </mesh>
    </RigidBody>
  );
}
