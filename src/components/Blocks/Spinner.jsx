/**
 * This component is a block obstacle with a spinning mesh that moves within defined bounds.
 * It can change its position (x, y, z) and spins at a configurable speed.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {boolean} - This dictate the type of material used in the floor if true floor1 will be used
 * @param {[number,number,number]} - main position of the block example:
 *    - `position[0]`: X-coordinate
 *    - `position[1]`: Y-coordinate
 *    - `position[2]`: Z-coordinate
 * @param {[number, number, number]} [props.minTranslation=[0, 0, 0]] - The minimum position for the translation (x, y, z) example:
 *    - `minTranslation[0]`: X-coordinate
 *    - `minTranslation[1]`: Y-coordinate
 *    - `minTranslation[2]`: Z-coordinate
 * @param {[number, number, number]} [props.maxTranslation=[0, 0, 0]] - The maximum position for the translation (x, y, z) example:
 *    - `maxTranslation[0]`: X-coordinate
 *    - `maxTranslation[1]`: Y-coordinate
 *    - `maxTranslation[2]`: Z-coordinate
 * @param {number} [props.translationSpeed=1] - The translation speed of the spinner example:
 *    - `translationSpeed`: speed
 * @param {number} [props.rotationSpeed=1] - The rotational speed of the spinner example:
 *    - `rotationSpeed`: speed
 * @param {geometry} - this is the shared geometry for performance purpoce
 * @param {material} - this is the shared material for performance purpoce
 *
 * @returns {JSX.Element} A JSX element representing the spinning block obstacle.
 */
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import * as THREE from "three";
import { boxGeometry } from "../../Geometries/Geometries";
import { matFloor1, matFloor2, matObstacule } from "../../Materials/Materials";

export default function BlockSpinner({
  position = [0, 0, 0],
  firstFloor = true,
  minTranslation = [0, 0, 0],
  maxTranslation = [0, 0, 0],
  translationSpeed = 1,
  rotationSpeed = 1,
  material,
  geometry,
}) {
  const spinner = useRef();
  const [rotationSpeedRandom] = useState(() => {
    return Math.random() - 0.5 > 0 ? -1 : 1;
  });
  console.log(rotationSpeedRandom);
  useFrame((state, delta) => {
    const clock = state.clock.getElapsedTime();
    const eulerRotation = new THREE.Euler(
      0,
      clock * rotationSpeed * rotationSpeedRandom,
      0
    ); // Rotate around Y-axis
    const quaternion = new THREE.Quaternion();
    quaternion.setFromEuler(eulerRotation);
    spinner.current.setNextKinematicTranslation({
      x:
        minTranslation[0] +
        Math.sin(clock * translationSpeed) * maxTranslation[0] +
        position[0],
      y:
        minTranslation[1] +
        (Math.sin(clock * translationSpeed) + 1) * maxTranslation[1] +
        0.1,
      z:
        minTranslation[2] +
        Math.cos(clock * translationSpeed) * maxTranslation[2] +
        position[1],
    });
    spinner.current.setNextKinematicRotation(quaternion);
  });
  return (
    <group position={position}>
      <RigidBody
        ref={spinner}
        type="kinematicPosition"
        restitution={0.1}
        friction={0}
      >
        <mesh
          material={matObstacule}
          geometry={boxGeometry}
          scale={[0.25, 0.25, 1.5]}
          castShadow
        ></mesh>
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          geometry={boxGeometry}
          material={firstFloor ? matFloor1 : matFloor2}
          position={[0, 0, 0]}
          scale={[4, 0.2, 4]}
          receiveShadow
        />
      </RigidBody>
    </group>
  );
}
