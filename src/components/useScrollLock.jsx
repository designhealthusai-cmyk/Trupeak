// useScrollLock.js
"use client"
import { useEffect } from "react";

const useScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // For mobile devices
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isLocked]);
};

export default useScrollLock;
