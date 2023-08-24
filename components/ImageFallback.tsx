"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageFallback({
  src,
  fallbackSrc,
  ...rest
}: {
  src: string;
  fallbackSrc: string;
}) {
  const [imgSrc, set_imgSrc] = useState(src);

  useEffect(() => {
    set_imgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          set_imgSrc(fallbackSrc);
        }
      }}
      onError={() => {
        set_imgSrc(fallbackSrc);
      }}
      alt="Image"
      width={500}
      height={300}
      className="sm:rounded-t-lg 
          group-hover:opacity-80 
          transition-opacity duration-200"
      placeholder="blur"
      blurDataURL="loading.svg"
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
}
