import { motion } from "framer-motion";

export default function FloatWrapper({
  children,
  amplitude = 15, // how far it floats up/down (px)
  duration = 3, // how long one cycle takes (seconds)
  rotate = false, // add gentle rotation
  className = "",
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -amplitude, 0], // float up then back down
        rotate: rotate ? [0, 2, -2, 0] : 0, // optional wiggle
      }}
      transition={{
        duration,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
}
