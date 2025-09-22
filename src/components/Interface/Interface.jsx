import Controllers from "./Controllers";

export default function Interface() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      {/* Menu */}
      <div className="absolute right-0 top-0 m-4 rounded-md w-12 h-12 bg-red-600 hover:bg-green-400">
        Menu
      </div>
      <div className="w-full h-full bg-[rgba(155,25,180,0.5)] backdrop-blur-md flex flex-col justify-center items-center">
        {/* Start */}
        <h2 className="text-3xl text-white font-bold">Start</h2>
        <h2 className="text-3xl text-white font-bold">Settings</h2>
        <h2 className="text-3xl text-white font-bold">Levels</h2>
        <h2 className="text-3xl text-white font-bold">About</h2>
        <h2 className="text-3xl text-white font-bold">Github</h2>
      </div>

      {/* Player stat */}
      <div className="fixed top-0 left-0 bg-[rgba(1,1,1,0.5)] z-50 hidden">
        <div className="w-screen h-[90px] flex justify-between items-center">
          <button className="text-4xl bg-slate-500 p-4 w-1/3 rounded-full text-white font-bold m-3">
            Player Name
          </button>
          <button className="text-6xl bg-slate-500 p-4 w-1/3 rounded-full text-white font-bold m-3">
            0.00
          </button>
          <button className="text-4xl bg-slate-500 p-4 w-1/3 rounded-full text-white font-bold m-3">
            Points: 999
          </button>
        </div>
      </div>
      <div className="fixed hidden w-screen h-screen flex flex-col justify-center items-center z-50 hidden">
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

      {/* Controls */}
      {/* <Controllers></Controllers> */}
    </div>
  );
}
