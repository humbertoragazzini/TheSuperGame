import { useFrame } from "@react-three/fiber";
import { useState } from "react";

export default function Controllers() {
  const [forward, setForward] = useState();

  useFrame((state, delta) => {
    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };
    const impulseStrenght = 5 * delta;
    const torqueStrenght = 1 * delta;
    if (forward) {
      impulse.x = impulseStrenght;
    }
    if (backward) {
      impulse.x = -impulseStrenght;
    }
    if (leftward) {
      impulse.z = -impulseStrenght;
    }
    if (rightward) {
      impulse.z = impulseStrenght;
    }
  });
  return (
    <div className="fixed bottom-0 h-[50vh] w-screen z-[9999]">
      <button
        onTouchStart={(e) => setForward(true)}
        onTouchEnd={(e) => setForward(false)}
        className="w-1/2 bg-slate-500 h-1/2 border-2 border-white opacity-50"
      >
        up
      </button>
      <button className="w-1/2 bg-slate-500 h-1/2 border-2 border-white opacity-50">
        down
      </button>
      <button className="w-1/2 bg-slate-500 h-1/2 border-2 border-white opacity-50">
        left
      </button>
      <button className="w-1/2 bg-slate-500 h-1/2 border-2 border-white opacity-50">
        right
      </button>
    </div>
  );
}
