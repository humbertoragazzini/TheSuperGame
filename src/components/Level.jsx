/**
 *
 * @returns {JSX.Element} A JSX element representing a complete level
 */

import BlockStart from "./Blocks/Start";

export default function Level() {
  return (
    <>
      <BlockStart position={[0, -0.1, 0]}></BlockStart>
    </>
  );
}
