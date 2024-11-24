import { RigidBody } from "@react-three/rapier";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Player() {
  return (
    <RigidBody position={[0, 10, 0]} colliders={"ball"}>
      <mesh>
        <sphereGeometry args={[1, 10, 10]} />
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
        <pointLight intensity={15} position={[0, 0.5, 0]} />
      </mesh>
    </RigidBody>
  );
}
