import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import AppLogo from "./AppLogo";

export default function Header() {
  return (
    <div className="flex flex-row justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex flex-row">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex flex-row mx-2">
        <ModeToggle />
        <AppLogo />
      </div>
    </div>
  );
}
