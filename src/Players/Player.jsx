import { RigidBody } from "@react-three/rapier";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { TorusKnotGeometry } from "three";
import { useRef } from "react";

export default function Player({ position = [0, 10, 0] }) {
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const playerRef = useRef();
  console.log(subscribeKeys);
  console.log(getKeys);

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward } = getKeys();
    const impulse = [0, 0, 0];
    const torque = [0, 0, 0];
    playerRef.current.applyImpulse(impulse);
    playerRef.current.applyTorqueImpulse(torque);
  });

  return (
    <RigidBody
      position={position}
      colliders={"ball"}
      restitution={0.65}
      friction={1}
      canSleep={false}
      ref={playerRef}
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
