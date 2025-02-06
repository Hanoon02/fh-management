function Loader() {
  console.log("Loader is rendering...");
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="inline-block h-16 w-16 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-[#3fada8] align-[-0.125em] text-surface opacity-100 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}
export default Loader;
