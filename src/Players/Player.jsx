import { RigidBody } from "@react-three/rapier";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useFrame, useThree } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { TorusKnotGeometry } from "three";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Player({ position = [0, 10, 0] }) {
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const playerRef = useRef();
  const mesh = useRef();
  const { camera } = useThree();

  const jump = () => {
    console.log("jump");
  };

  useEffect(() => {
    subscribeKeys(
      (state) => {
        return state.jump;
      },
      (value) => {
        if (value) {
          jump();
        }
      }
    );
  }, []);

  useFrame((state, delta) => {
    if (playerRef.current) {
      const { forward, backward, leftward, rightward, jump } = getKeys();
      const impulse = { x: 0, y: 0, z: 0 };
      const torque = { x: 0, y: 0, z: 0 };
      const impulseStrenght = 5 * delta;
      const torqueStrenght = 1 * delta;
      if (forward) {
        impulse.x = impulseStrenght;
      }
      if (backward) {
        impulse.x = -impulseStrenght;
      }
      if (leftward) {
        impulse.z = -impulseStrenght;
      }
      if (rightward) {
        impulse.z = impulseStrenght;
      }
      if (jump) {
        impulse.y = impulseStrenght * 15;
      }
      camera.position.x = playerRef.current.translation().x - 5;
      camera.position.z = playerRef.current.translation().z;
      camera.position.y = 3.5;
      const translation = playerRef.current.translation();
      const target = new THREE.Vector3(
        translation.x,
        translation.y,
        translation.z
      );
      camera.lookAt(target);
      playerRef.current.applyImpulse(impulse);
      playerRef.current.applyTorqueImpulse(torque);
    }
  });

  return (
    <RigidBody
      position={position}
      colliders={"ball"}
      restitution={0.65}
      friction={1}
      canSleep={false}
      angularDamping={0.5}
      linearDamping={0.5}
      ref={playerRef}
    >
      <mesh ref={mesh}>
        <sphereGeometry args={[0.5, 20, 20]} />
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
