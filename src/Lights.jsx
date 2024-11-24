export default function Lights() {
  return (
    <>
      <pointLight
        castShadow
        position={[4, 4, 1]}
        intensity={50.5}
        shadow-mapSize={[4096, 4096]}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-top={30}
        shadow-camera-right={30}
        shadow-camera-bottom={-30}
        shadow-camera-left={-30}
      />
      <ambientLight intensity={1.5} />
    </>
  );
}
