import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import * as THREE from "three";

// we create a box geometry that we can reuse in all places by just changing the scale of the mesh using it
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// materials
const matFloor1 = new THREE.MeshStandardMaterial({ color: "green" });
const matFloor2 = new THREE.MeshStandardMaterial({ color: "blue" });
const matObstacule = new THREE.MeshStandardMaterial({ color: "red" });
const matWall = new THREE.MeshStandardMaterial({ color: "pink" });

/**
 *  This is the first block of the game and is the start of all the levels
 * @param {object} props - The property passed to the component
 * @param {[number,number,number]} - here we have the x - y - z position property example:
 *    - `position[0]`: X-coordinate
 *    - `position[1]`: Y-coordinate
 *    - `position[2]`: Z-coordinate
 * @returns  {JSX.Element} as a return we return the start floor of the game
 */
function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* floor */}
      <mesh
        geometry={boxGeometry}
        material={matFloor1}
        position={[0, 0, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
    </group>
  );
}

// old
/**
 *  This component is a block class obstacule with a spinning mesh that change y x and z position
 *
 *  @param {object} props - The property passed to the component
 *  @param {[number,number,number]} - min position of the translation
 *  @param {[number,number,number]} - max position of the translation
 *  @param {number} - total force speed of the spinner
 *
 * @returns {JSX.Element} The final return is a block obstacul spinner with the min max and speed set it.
 */

// new
/**
 * This component is a block obstacle with a spinning mesh that moves within defined bounds.
 * It can change its position (x, y, z) and spins at a configurable speed.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {[number, number, number]} [props.minTranslation=[0, 0, 0]] - The minimum position for the translation (x, y, z).
 * @param {[number, number, number]} [props.maxTranslation=[0, 0, 0]] - The maximum position for the translation (x, y, z).
 * @param {number} [props.speed=1] - The rotational speed of the spinner.
 *
 * @returns {JSX.Element} A JSX element representing the spinning block obstacle.
 */

function BlockSpinner({
  position = [0, 0, 0],
  minTranslation = [0, 0, 0],
  maxTranslation = [0, 0, 0],
  translationSpeed = 1,
  rotationSpeed = 1,
}) {
  const spinner = useRef();
  useFrame((state, delta) => {
    const clock = state.clock.getElapsedTime();
    const eulerRotation = new THREE.Euler(0, clock * rotationSpeed, 0); // Rotate around Y-axis
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
      <RigidBody ref={spinner} type="kinematicPosition">
        <mesh
          material={matObstacule}
          geometry={boxGeometry}
          scale={[0.25, 0.25, 1.5]}
        ></mesh>
      </RigidBody>
      <RigidBody type="fixed">
        <mesh
          geometry={boxGeometry}
          material={matFloor1}
          position={[0, 0, 0]}
          scale={[4, 0.2, 4]}
          receiveShadow
        />
      </RigidBody>
    </group>
  );
}

export default function Level() {
  return (
    <>
      <BlockStart position={[0, -0.1, 0]}></BlockStart>
      <BlockSpinner
        position={[4, -0.1, 0]}
        translationSpeed={2}
        rotationSpeed={4}
        minTranslation={[0, 0, 0]}
        maxTranslation={[1, 1, 1]}
      ></BlockSpinner>
    </>
  );
}
