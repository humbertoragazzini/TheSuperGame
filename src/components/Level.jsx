/**
 *
 * @returns {JSX.Element} A JSX element representing a complete level
 */

import BlockAxe from "./Blocks/Axe";
import BlockEnd from "./Blocks/End";
import BlockLimboBar from "./Blocks/Limbo";
import BlockSpinner from "./Blocks/Spinner";
import BlockStart from "./Blocks/Start";
import { useMemo } from "react";

export default function Level({
  count = 5,
  types = [BlockSpinner, BlockAxe, BlockLimboBar],
}) {
  const blocks = useMemo(() => {
    const blocks = [];

    for (let i = 0; i < count; i++) {
      const index = Math.floor(Math.random() * types.length);
      const type = types[index];
      blocks.push(type);
    }

    return blocks;
  }, [count, types]);

  return (
    <>
      <BlockStart position={[0, -0.1, 0]}></BlockStart>
      {blocks.map((Block, i) => {
        return (
          <Block
            key={i}
            position={[i * 4 + 4, Math.random() * 2, Math.random() * 5]}
          />
        );
      })}
      <BlockEnd position={[4 * count + 4, -0.1, 0]}></BlockEnd>
    </>
  );
}
