import { RigidBody } from "@react-three/rapier";

function BlockStart({ position = [0, 0, 0] }) {
  return (
    <RigidBody type="fixed" position={position}>
      <mesh receiveShadow>
        <boxGeometry args={[4, 0.2, 4]}></boxGeometry>
        <meshStandardMaterial color={"red"}></meshStandardMaterial>
      </mesh>
    </RigidBody>
  );
}

export default function Level() {
  return (
    <>
      <BlockStart></BlockStart>
    </>
  );
}
