import { RigidBody, useRapier } from "@react-three/rapier";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useFrame, useThree } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { TorusKnotGeometry } from "three";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Player({ position = [0, 10, 0] }) {
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const playerRef = useRef();
  const mesh = useRef();
  const { camera } = useThree();
  const { rapier, world } = useRapier();
  const [smoothCameraPosition] = useState(() => new THREE.Vector3(0, 0, 0));
  const [smoothCameraTarget] = useState(() => new THREE.Vector3(15, 15, 15));

  const jump = () => {
    const origin = playerRef.current.translation();
    origin.y -= 0.55;
    const direction = { x: 0, y: -1, z: 0 };
    const ray = new rapier.Ray(origin, direction);
    const hit = world.castRay(ray, 10, true);
    if (hit.timeOfImpact < 0.05 && hit.timeOfImpact !== null) {
      playerRef.current.applyImpulse({ x: 0, y: 3, z: 0 });
    }
  };

  useEffect(() => {
    const unsubscribe = subscribeKeys(
      (state) => {
        return state.jump;
      },
      (value) => {
        if (value) {
          jump();
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  useFrame((state, delta) => {
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
    console.log(state.camera.position.y);
    if (state.camera.position.y < -20) {
      console.log(state.camera.position.y);
      playerRef.current.setTranslation({
        x: state.camera.position.x,
        y: 10,
        z: state.camera.position.z,
      });
    }
    const translation = playerRef.current.translation();
    const position = new THREE.Vector3(translation.x - 5, translation.y + 2, 0);
    const target = new THREE.Vector3(
      translation.x,
      translation.y,
      translation.z
    );
    smoothCameraPosition.lerp(position, 7 * delta);
    smoothCameraTarget.lerp(target, 7 * delta);
    state.camera.position.copy(smoothCameraPosition);
    state.camera.lookAt(smoothCameraTarget);
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
