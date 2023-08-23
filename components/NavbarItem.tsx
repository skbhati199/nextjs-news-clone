"use client";

import Link from "next/link";
import React from "react";

import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavbarItemProps {
  title: string;
  param: string;
}

export default function NavbarItem({ title, param }: NavbarItemProps) {
  const searchParams = useSearchParams();
  const newsType = searchParams.get("type");
  return (
    <div>
      <Link
        className={cn(
          `m-4 hover:text-green-600 font-semibold p-2`,
          newsType &&
            newsType == param &&
            "underline  underline-offset-8 decoration-4 decoration-green-500 rounded-lg"
        )}
        href={`/?type=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
