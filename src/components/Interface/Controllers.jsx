export default function Controllers() {
  return (
    <div className="fixed bottom-0 h-[50vh] w-screen z-[9999]">
      <button className="w-1/2 bg-slate-500 h-1/2 border-2 border-white opacity-50">
        up
      </button>
      <button className="w-1/2 bg-slate-500 h-1/2 border-2 border-white opacity-50">
        down
      </button>
      <button className="w-1/2 bg-slate-500 h-1/2 border-2 border-white opacity-50">
        left
      </button>
      <button className="w-1/2 bg-slate-500 h-1/2 border-2 border-white opacity-50">
        right
      </button>
    </div>
  );
}
