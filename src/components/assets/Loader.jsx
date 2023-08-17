import React from "react";
import { GooeyLoader1 } from "react-loaders-kit";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 100,
    duration: 3,
    colors: ["#99fffe", "#f42e00", "#042549"],
  };

  return (
    <div className="grid place-content-center h-screen bg-black">
      <GooeyLoader1 {...loaderProps} />
    </div>
  );
}

export default Loader;
