/**
 *  This is the first block of the game and is the start of all the levels
 * @param {object} props - The property passed to the component
 * @param {[number,number,number]} - here we have the x - y - z position property example:
 *    - `position[0]`: X-coordinate
 *    - `position[1]`: Y-coordinate
 *    - `position[2]`: Z-coordinate
 * @returns  {JSX.Element} as a return we return the start floor of the game
 */
import { RigidBody } from "@react-three/rapier";
import { boxGeometry } from "../../Geometries/Geometries";
import { matFloor1 } from "../../Materials/Materials";

export default function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <RigidBody type="fixed">
        {/* floor */}
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
