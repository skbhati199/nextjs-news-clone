import Link from "next/link";
import React from "react";

export default function AppLogo() {
  return (
    <Link href="/" className="ml-2">
      <h2 className="flex items-center text-2xl">
        <span className="font-bold bg-green-600 py-1 px-2 rounded-lg mr-1">
          NextNews
        </span>
        <span className="text-xl sm:inline hidden">Clone</span>
      </h2>
    </Link>
  );
}
