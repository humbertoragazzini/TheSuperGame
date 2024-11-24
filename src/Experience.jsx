import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights.jsx";
import { Physics } from "@react-three/rapier";
import Level from "./components/Level.jsx";
import BlockSpinner from "./components/Blocks/Spinner.jsx";
import BlockAxe from "./components/Blocks/Axe.jsx";
import BlockLimboBar from "./components/Blocks/Limbo.jsx";

export default function Experience() {
  return (
    <>
      <OrbitControls makeDefault />

      <Lights />
      <Physics debug>
        <Level count={5}></Level>
      </Physics>
    </>
  );
}
