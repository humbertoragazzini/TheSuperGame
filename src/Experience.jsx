import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights.jsx";
import { Physics } from "@react-three/rapier";
import Level from "./components/Level.jsx";

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
