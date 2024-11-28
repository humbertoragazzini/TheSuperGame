import Controllers from "./Controllers";

export default function Interface() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <div>
        <div>
          <button>Player</button>
          <button>0.00</button>
          <button>Points: 999</button>
        </div>
      </div>
      <div className="relative w-screen h-screen flex flex-col justify-center items-center z-50">
        <div>
          <button className="text-4xl bg-white m-3">START GAME</button>
        </div>
        <div>
          <button className="text-4xl bg-white m-3">SCORES</button>
        </div>
        <div>
          <button className="text-4xl bg-white m-3">SETTINGS</button>
        </div>
        <div>
          <button className="text-4xl bg-white m-3">ABOUT US</button>
        </div>
      </div>
      <Controllers></Controllers>
    </div>
  );
}
