import Controllers from "./Controllers";

export default function Interface() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <div className="fixed top-0 left-0 bg-[rgba(1,1,1,0.5)] z-50">
        <div className="w-screen h-[90px] flex justify-between items-center">
          <button className="text-4xl text-white font-bold m-3">Player</button>
          <button className="text-4xl text-white font-bold m-3">0.00</button>
          <button className="text-4xl text-white font-bold m-3">
            Points: 999
          </button>
        </div>
      </div>
      <div className="fixed w-screen h-screen flex flex-col justify-center items-center z-50">
        <div>
          <button className="text-4xl text-white font-bold m-3">
            START GAME
          </button>
        </div>
        <div>
          <button className="text-4xl text-white font-bold m-3">SCORES</button>
        </div>
        <div>
          <button className="text-4xl text-white font-bold m-3">
            SETTINGS
          </button>
        </div>
        <div>
          <button className="text-4xl text-white font-bold m-3">
            ABOUT US
          </button>
        </div>
      </div>
      <Controllers></Controllers>
    </div>
  );
}
