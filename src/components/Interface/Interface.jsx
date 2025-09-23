import GameButton from "./Button";
import Controllers from "./Controllers";

export default function Interface() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      {/* Menu */}
      <div className="absolute top-0 right-0 w-12 h-12 m-4 bg-red-600 rounded-md hover:bg-green-400">
        Menu
      </div>
      <div className="w-full h-full bg-[rgba(0,0,0,0.95)] backdrop-blur-md flex flex-col justify-center items-center">
        <div className="m-3">
          <GameButton theme={"transparent"}>START GAME</GameButton>
        </div>
        <div className="m-3">
          <GameButton theme={"transparent"}>SCORES</GameButton>
        </div>
        <div className="m-3">
          <GameButton theme={"transparent"}>SETTINGS</GameButton>
        </div>
        <div className="m-3">
          <GameButton theme={"transparent"}>ABOUT US</GameButton>
        </div>
      </div>

      {/* Player stat */}
      <div className="fixed top-0 left-0 bg-[rgba(1,1,1,0.5)] z-50 hidden">
        <div className="w-screen h-[90px] flex justify-between items-center">
          <button className="w-1/3 p-4 m-3 text-4xl font-bold text-white rounded-full bg-slate-500">
            Player Name
          </button>
          <button className="w-1/3 p-4 m-3 text-6xl font-bold text-white rounded-full bg-slate-500">
            0.00
          </button>
          <button className="w-1/3 p-4 m-3 text-4xl font-bold text-white rounded-full bg-slate-500">
            Points: 999
          </button>
        </div>
      </div>
      {/* Controls */}
      {/* <Controllers></Controllers> */}
    </div>
  );
}

function MenuButton({ children, onClick }) {
  return (
    <button className="text-[70px] font-bold text-white lg:m-5">
      {children}
    </button>
  );
}
