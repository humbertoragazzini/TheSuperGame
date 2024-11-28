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
    <div>
      <div className="fixed bottom-0 h-[50vh] w-screen flex flex-col justify-end align-center z-40">
        <div className="relative min-w-[300px] h-[300px] bottom-0 grid grid-cols-6">
          <button
            onTouchStart={(e) => ArrowUpPress()}
            onTouchEnd={(e) => ArrowUpRelease()}
            className="w-full bg-slate-500 h-1/2 border-b-0 border-2 border-white opacity-75 h-24 col-start-1 col-end-3"
          ></button>
          <button
            onTouchStart={(e) => ArrowUpPress()}
            onTouchEnd={(e) => ArrowUpRelease()}
            className="bg-slate-500 h-1/2 border-2 border-white opacity-50 h-24 col-start-4 col-end-6"
          ></button>

          <button
            onTouchStart={(e) => ArrowUpPress()}
            onTouchEnd={(e) => ArrowUpRelease()}
            className="w-full bg-slate-500 border-2 border-white border-b-0 border-t-0 opacity-75 h-24 col-start-1 col-end-3"
          ></button>
          <button
            onTouchStart={(e) => ArrowLeftPress()}
            onTouchEnd={(e) => ArrowLeftRelease()}
            className="bg-slate-500 h-1/2 border-2 border-white opacity-50 h-24 col-start-3 col-end-5"
          ></button>

          <button
            onTouchStart={(e) => ArrowRightPress()}
            onTouchEnd={(e) => ArrowRightRelease()}
            className="bg-slate-500 h-1/2 border-2 border-white opacity-50 h-24 col-start-5 col-end-7"
          ></button>

          <button
            onTouchStart={(e) => ArrowUpPress()}
            onTouchEnd={(e) => ArrowUpRelease()}
            className="w-full bg-slate-500 h-1/2 border-t-0 border-2 border-white opacity-75 h-28 col-start-1 col-end-3"
          ></button>
          <button
            onTouchStart={(e) => ArrowDownPress()}
            onTouchEnd={(e) => ArrowDownRelease()}
            className="bg-slate-500 h-1/2 border-2 border-white opacity-50 h-24 col-start-4 col-end-6"
          ></button>
        </div>
      </div>
    </div>
  );
}
