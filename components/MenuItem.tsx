import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: IconType;
}

export default function MenuItem({ title, address, Icon }: MenuItemProps) {
  return (
    <div>
      <Link
        href={address}
        className="flex  font-semibold lg:mx-6 hover:text-green-500"
      >
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:block my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}
