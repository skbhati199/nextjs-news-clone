import React from "react";
import AppLogo from "./AppLogo";

export default function Footer() {
  return (
    <footer className="flex flex-row pt-4 pb-2 justify-between items-center max-w-6xl mx-auto">
      <AppLogo />
      <div className="text-muted-foreground">
        Created By <span className="font-semibold text-2xl">Sonu Kumar</span>
      </div>
    </footer>
  );
}
