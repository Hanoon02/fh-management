function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <div
          className="h-24 w-24 rounded-full bg-[#3fada8] animate-[spinner-grow_1.5s_ease-in-out_infinite]"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>

        <div className="absolute top-0 left-0 h-24 w-24 animate-[floating-orb_3s_ease-in-out_infinite]">
          <div className="h-6 w-6 rounded-full bg-[#ff6f61] animate-[color-shift_5s_linear_infinite]"></div>
        </div>
        <div className="absolute top-0 right-0 h-24 w-24 animate-[floating-orb_3s_ease-in-out_infinite] delay-500">
          <div className="h-6 w-6 rounded-full bg-[#6b5b95] animate-[color-shift_5s_linear_infinite]"></div>
        </div>
        <div className="absolute bottom-0 left-0 h-24 w-24 animate-[floating-orb_3s_ease-in-out_infinite] delay-1000">
          <div className="h-6 w-6 rounded-full bg-[#88b04b] animate-[color-shift_5s_linear_infinite]"></div>
        </div>
        <div className="absolute bottom-0 right-0 h-24 w-24 animate-[floating-orb_3s_ease-in-out_infinite] delay-1500">
          <div className="h-6 w-6 rounded-full bg-[#3fada8] animate-[color-shift_5s_linear_infinite]"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
