import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Html, KeyboardControls } from "@react-three/drei";
import Controllers from "./components/Interface/Controllers.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <KeyboardControls
    map={[
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "backward", keys: ["ArrowDown", "KeyS"] },
      { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
      { name: "rightward", keys: ["ArrowRight", "KeyD"] },
      { name: "jump", keys: ["Space"] },
    ]}
  >
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 500,
        position: [2.5, 4, 6],
      }}
    >
      <color args={["black"]} attach={"background"}></color>
      <Experience />
      <Html transform={false}>
        <Controllers></Controllers>
      </Html>
    </Canvas>
  </KeyboardControls>
);
