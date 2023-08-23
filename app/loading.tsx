import Image from "next/image";
import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center  items-center h-screen ">
      <Image src={"loading.svg"} width={100} height={100} alt="loading" />
    </div>
  );
}
