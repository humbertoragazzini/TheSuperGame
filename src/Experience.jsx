import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights.jsx";
import Level from "./Level.js";
import { Physics } from "@react-three/rapier";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <Lights />
      <Physics debug>
        <Level></Level>
      </Physics>
    </>
  );
}
