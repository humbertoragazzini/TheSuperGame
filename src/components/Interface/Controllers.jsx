import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";

export default function Controllers() {
  // const [subscribeKeys, getKeys] = useKeyboardControls();
  // const [, set] = useKeyboardControls();

  const handlePressForward = () => {};
  const handleReleaseForward = () => {};

  const ArrowUpPress = () => {
    const keyEvent = new KeyboardEvent("keydown", {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38, // Deprecated but still needed for some older browsers
      bubbles: true,
    });

    document.dispatchEvent(keyEvent);
    console.log("Simulated key press: ArrowUp");
  };
  const ArrowUpRelease = () => {
    const keyEvent = new KeyboardEvent("keyup", {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38, // Deprecated but still needed for some older browsers
      bubbles: true,
    });

    document.dispatchEvent(keyEvent);
    console.log("Simulated key press: ArrowUp");
  };
  const ArrowDownPress = () => {
    const keyEvent = new KeyboardEvent("keydown", {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 38, // Deprecated but still needed for some older browsers
      bubbles: true,
    });

    document.dispatchEvent(keyEvent);
    console.log("Simulated key press: ArrowUp");
  };
  const ArrowDownRelease = () => {
    const keyEvent = new KeyboardEvent("keyup", {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 38, // Deprecated but still needed for some older browsers
      bubbles: true,
    });

    document.dispatchEvent(keyEvent);
    console.log("Simulated key press: ArrowUp");
  };

  const ArrowLeftPress = () => {
    const keyEvent = new KeyboardEvent("keydown", {
      key: "ArrowLeft",
      code: "ArrowLeft",
      keyCode: 37, // KeyCode for Left Arrow
      bubbles: true,
    });

    document.dispatchEvent(keyEvent);
    console.log("Simulated key press: ArrowLeft");
  };

  const ArrowLeftRelease = () => {
    const keyEvent = new KeyboardEvent("keyup", {
      key: "ArrowLeft",
      code: "ArrowLeft",
      keyCode: 37, // KeyCode for Left Arrow
      bubbles: true,
    });

    document.dispatchEvent(keyEvent);
    console.log("Simulated key release: ArrowLeft");
  };

  const ArrowRightPress = () => {
    const keyEvent = new KeyboardEvent("keydown", {
      key: "ArrowRight",
      code: "ArrowRight",
      keyCode: 39, // KeyCode for Right Arrow
      bubbles: true,
    });

    document.dispatchEvent(keyEvent);
    console.log("Simulated key press: ArrowRight");
  };

  const ArrowRightRelease = () => {
    const keyEvent = new KeyboardEvent("keyup", {
      key: "ArrowRight",
      code: "ArrowRight",
      keyCode: 39, // KeyCode for Right Arrow
      bubbles: true,
    });

    document.dispatchEvent(keyEvent);
    console.log("Simulated key release: ArrowRight");
  };

  return (
    <div className="fixed bottom-0 h-[50vh] w-screen z-[9999]">
      <button
        onTouchStart={(e) => ArrowUpPress()}
        onTouchEnd={(e) => ArrowUpRelease()}
        className="w-1/2 bg-slate-500 h-1/2 border-2 border-white opacity-50"
      >
        Forward
      </button>
      <button
        onTouchStart={(e) => ArrowDownPress()}
        onTouchEnd={(e) => ArrowDownRelease()}
        className="w-1/2 bg-slate-500 h-1/2 border-2 border-white opacity-50"
      >
        Backward
      </button>
      <button
        onTouchStart={(e) => ArrowLeftPress()}
        onTouchEnd={(e) => ArrowLeftRelease()}
        className="w-1/2 bg-slate-500 h-1/2 border-2 border-white opacity-50"
      >
        left
      </button>
      <button
        onTouchStart={(e) => ArrowRightPress()}
        onTouchEnd={(e) => ArrowRightRelease()}
        className="w-1/2 bg-slate-500 h-1/2 border-2 border-white opacity-50"
      >
        right
      </button>
    </div>
  );
}
