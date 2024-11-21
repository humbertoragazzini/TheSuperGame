import { RigidBody } from "@react-three/rapier";

function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[4, 0.2, 4]}></boxGeometry>
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
