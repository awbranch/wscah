import React from "react";
import { Hero as Props } from "@/types/Hero";
import { LinkButton } from "@/components/Button";
import TitleText from "@/components/TitleText";
import ResponsiveImage from "@/components/ResponsiveImage";
import { breakpoints } from "@/utils/globals";
import clsx from "clsx";

export default function Hero({
  blockId,
  blockPalette,
  title,
  subtitle,
  text,
  display,
  images,
  button,
}: Props) {
  return (
    <div
      className={
        "mx-auto mb-[300px] grid grid-flow-row items-center lg:auto-cols-fr lg:grid-flow-col"
      }
    >
      <div className={"flex flex-col items-center gap-6 px-[20px]"}>
        <TitleText
          title={title}
          blockPalette={blockPalette}
          className="text-center text-6mxl font-black md:text-6xl"
        />
        <div className="text-center text-lg">{subtitle}</div>

        {button.length && (
          <LinkButton
            href={button[0].href}
            variant={button[0].variant}
            icon={button[0].icon}
          >
            {button[0].label}
          </LinkButton>
        )}
        {text && <div>Additional text goes here</div>}
      </div>
      <div className="flex justify-center">
        <div className={"relative h-[590px] w-[590px]"}>
          {images.map((image, idx) => (
            <ResponsiveImage
              key={idx}
              image={image.image}
              priority={false}
              sizes={`(max-width: ${breakpoints.lg}px) 32rem, 50vw`}
              className={clsx(
                "absolute top-[25px] aspect-[5/8] w-[335px] rounded-2xl",
                {
                  "left-[45px] rotate-[-10deg]": idx === 0,
                  "left-[105px] rotate-[-5deg]": idx === 1,
                  "left-[165px]": idx === 2,
                  "left-[225px] rotate-[5deg]": idx === 3,
                },
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
