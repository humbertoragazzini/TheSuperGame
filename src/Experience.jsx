import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights.jsx";
import { Physics } from "@react-three/rapier";
import Level from "./components/Level.jsx";
import BlockSpinner from "./components/Blocks/Spinner.jsx";
import BlockAxe from "./components/Blocks/Axe.jsx";
import BlockLimboBar from "./components/Blocks/Limbo.jsx";
import Player from "./Players/Player.jsx";

export default function Experience() {
  return (
    <>
      {/* <OrbitControls makeDefault /> */}

      <Lights />
      <Physics>
        <Level count={2}></Level>
        <Player position={[0, 0.1, 0]}></Player>
      </Physics>
    </>
  );
}
