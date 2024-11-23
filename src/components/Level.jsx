import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";
import * as THREE from "three";

// we create a box geometry that we can reuse in all places by just changing the scale of the mesh using it
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// materials
const matFloor1 = new THREE.MeshStandardMaterial({ color: "green" });
const matFloor2 = new THREE.MeshStandardMaterial({ color: "blue" });
const matObstacule = new THREE.MeshStandardMaterial({ color: "red" });
const matWall = new THREE.MeshStandardMaterial({ color: "pink" });

/**
 *
 * @returns {JSX.Element} A JSX element representing a complete level
 */

export default function Level() {
  return (
    <>
      <BlockStart position={[0, -0.1, 0]}></BlockStart>
      <BlockLimboBar
        position={[4, -0.1, 0]}
        translationSpeed={2}
        firstFloor={false}
        minTranslation={[0, 0, 0]}
        maxTranslation={[1, 1, 1]}
      ></BlockLimboBar>
      <BlockAxe
        position={[8, -0.1, 0]}
        translationSpeed={2}
        firstFloor={false}
        minTranslation={[0, 0, -1.5]}
        maxTranslation={[0, 0, 1.5]}
      ></BlockAxe>
    </>
  );
}
