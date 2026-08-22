"use client";

import Image from "next/image";

/** Image with cinematic hover zoom, used across cards. */
export default function PhotoCard({
  src,
  alt,
  ratio = "aspect-[4/3]",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: {
  src: string;
  alt: string;
  ratio?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${ratio}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
      />
    </div>
  );
}
