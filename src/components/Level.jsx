/**
 *
 * @returns {JSX.Element} A JSX element representing a complete level
 */

import BlockAxe from "./Blocks/Axe";
import BlockEnd from "./Blocks/End";
import BlockLimboBar from "./Blocks/Limbo";
import BlockSpinner from "./Blocks/Spinner";
import BlockStart from "./Blocks/Start";

export default function Level() {
  return (
    <>
      <BlockStart position={[0, -0.1, 0]}></BlockStart>
      <BlockSpinner position={[4, -0.1, 0]}></BlockSpinner>
      <BlockAxe position={[8, -0.1, 0]}></BlockAxe>
      <BlockLimboBar position={[12, -0.1, 0]}></BlockLimboBar>
      <BlockEnd position={[16, -0.1, 0]}></BlockEnd>
    </>
  );
}
