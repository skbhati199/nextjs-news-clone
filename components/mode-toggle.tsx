"use client";

import * as React from "react";

import { FaMoon, FaSun } from "react-icons/fa";

import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <FaMoon className="w-6 h-6" />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <FaSun className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}
