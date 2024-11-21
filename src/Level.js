import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

// we create a box geometry that we can reuse in all places by just changing the scale of the mesh using it
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

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
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      >
        <meshStandardMaterial color={"red"}></meshStandardMaterial>
      </mesh>
    </group>
  );
}

export default function Level() {
  return (
    <>
      <BlockStart position={[0, -0.1, 0]}></BlockStart>
    </>
  );
}
