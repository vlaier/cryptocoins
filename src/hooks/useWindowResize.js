import React, { useState, useEffect } from "react";

export default function useWindowResize() {
  const [windowSize, setWindowSize] = useState(false);

  useEffect(() => {
    !windowSize &&
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
