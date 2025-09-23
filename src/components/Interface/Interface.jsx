import { useEffect } from "react";
import myZustand from "../../hooks/myZustand";
import GameButton from "./Button";
import Controllers from "./Controllers";
import { AnimatePresence, motion } from "framer-motion";
import { TfiMenu } from "react-icons/tfi";
import FloatWrapper from "../atoms/FloatWrapper";

export default function Interface() {
  const { isMenuOpen, toggleMenu } = myZustand();

  useEffect(() => {
    console.log(isMenuOpen);
  }, [isMenuOpen]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      {/* Menu */}
      <GameButton
        theme={"transparent"}
        className={"fixed top-0 right-0 m-3"}
        onclick={toggleMenu}
      >
        <TfiMenu />
      </GameButton>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="game-menu"
            // start off-screen to the right, fade in
            initial={{ x: 1500, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 260, damping: 24 },
            }}
            // slide out to the right, quick fade out
            exit={{ x: 1500, opacity: 0, transition: { duration: 0.25 } }}
            className="fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.95)] backdrop-blur-md flex flex-col justify-center items-center"
            role="dialog"
            aria-modal="true"
          >
            <FloatWrapper rotate>
              <div className="m-3">
                <GameButton theme="arcade-pink">START GAME</GameButton>
              </div>
            </FloatWrapper>

            <FloatWrapper rotate>
              <div className="m-3">
                <GameButton theme="arcade-green">SCORES</GameButton>
              </div>
            </FloatWrapper>

            <FloatWrapper rotate>
              <div className="m-3">
                <GameButton theme="arcade-purple">SETTINGS</GameButton>
              </div>
            </FloatWrapper>

            <FloatWrapper rotate>
              <div className="m-3">
                <GameButton theme="arcade-cyandad">ABOUT US</GameButton>
              </div>
            </FloatWrapper>

            <FloatWrapper rotate>
              <div className="m-3">
                <GameButton theme="arcade-orange" onclick={toggleMenu}>
                  EXIT
                </GameButton>
              </div>
            </FloatWrapper>
          </motion.div>
        )}
      </AnimatePresence>

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
