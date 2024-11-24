/**
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
 * @param {number} [props.translationSpeed=1] - The translation speed of the limbo example:
 *    - `translationSpeed`: speed
 *
 * @returns
 */
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import { boxGeometry } from "../../Geometries/Geometries";
import { matFloor1, matFloor2, matObstacule } from "../../Materials/Materials";

export default function BlockLimboBar({
  position = [0, 0, 0],
  firstFloor = true,
  minTranslation = [0, 0, 0],
  maxTranslation = [0, 0, 0],
  translationSpeed = 1,
}) {
  const limbobar = useRef();
  const [offsetTranslation] = useState(() => {
    return Math.random() * Math.PI * 2;
  });

  useFrame((state, delta) => {
    const clock = state.clock.getElapsedTime();
    limbobar.current.setNextKinematicTranslation({
      x: position[0],
      y:
        minTranslation[1] +
        (Math.sin(clock * translationSpeed + offsetTranslation) + 1) *
          maxTranslation[1] +
        0.1,
      z: position[2],
    });
  });
  return (
    <group position={position}>
      <RigidBody
        ref={limbobar}
        type="kinematicPosition"
        restitution={0.1}
        friction={0}
      >
        <mesh
          material={matObstacule}
          geometry={boxGeometry}
          scale={[0.25, 0.25, 3.85]}
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
