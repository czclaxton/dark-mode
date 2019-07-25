import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage(darkModeOn);

  useEffect(() => {
    darkMode === true
      ? document.getElementsByName("body").classList.add("dark-mode")
      : document.getElementsByName("body").classList.remove("dark-mode");
    return darkMode, setDarkMode;
  }, [darkMode]);
};
