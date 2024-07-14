import React, { ImgHTMLAttributes } from "react";
import { imageAttributes, urlFor } from "@/utils/sanity";
import { Image } from "@/types/Image";
import { twMerge } from "tailwind-merge";

type ResponsiveImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  image: Image;
  sizes: string;
  priority?: boolean;
  className?: string;
};

const responsiveWidths = [700, 990, 1280, 1570, 1860];

export default function ResponsiveImage({
  image,
  sizes,
  priority = false,
  className,
}: ResponsiveImageProps) {
  if (!image?.asset) {
    return <></>;
  }

  const { width, height } = imageAttributes(image);

  const objectPosition = image.hotspot
    ? `${image.hotspot.x * 100}% ${image.hotspot.y * 100}%`
    : undefined;

  const sources = responsiveWidths
    .filter((w) => w < width)
    .map((w) => ({
      url: urlFor(image).width(w).auto("format").url(),
      width: w,
    }));

  // This can happen if the image width is less than the min responsive width
  // Just serve up the small image without any formatting or compression
  if (sources.length === 0) {
    sources.push({
      url: urlFor(image).url(),
      width: width,
    });
  }

  // Set the src to the best image. This is the fallback if srcSet fails to find an image
  const src = sources[sources.length - 1].url;
  const srcSet = sources.map((s) => `${s.url} ${s.width}w`).join(", ");

  return (
    <img
      alt={image.alt || ""}
      fetchPriority={priority ? "high" : undefined}
      width={width}
      height={height}
      decoding={"async"}
      className={twMerge("w-full object-cover", className)}
      sizes={sizes}
      srcSet={srcSet}
      src={src}
      style={{
        objectPosition: objectPosition,
      }}
    />
  );
}
