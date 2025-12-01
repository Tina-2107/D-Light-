import React, { useState, useEffect } from "react";
import MyContext from "./MyContext";

export default function MyState({ children }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const root = document.documentElement;

    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <MyContext.Provider value={{ mode, toggleMode }}>
      {children}
    </MyContext.Provider>
  );
}
