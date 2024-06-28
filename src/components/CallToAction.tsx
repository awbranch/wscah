import React from "react";
import { twJoin } from "tailwind-merge";
import { CallToAction as Props } from "@/types/CallToAction";
import TitleText from "@/components/TitleText";
import Eyebrow from "@/components/Eyebrow";
import SimpleText from "@/components/SimpleText";
import ResponsiveImage from "@/components/ResponsiveImage";
import { breakpoints, userPaletteButtonProps } from "@/utils/globals";
import { LinkButton } from "@/components/Button";

export default function CallToAction({
  blockPalette,
  orientation,
  image,
  eyebrow,
  title,
  text,
  button,
}: Props) {

  return (
    <div className="relative">
      <div
        className={twJoin(
          "relative h-80 overflow-hidden md:absolute md:h-full md:w-1/2",
          orientation === "left" ? "md:left-0" : "md:right-0",
        )}
      >
        <ResponsiveImage
          image={image}
          priority={false}
          sizes={`(max-width: ${breakpoints.md}px) 100vw, 50vw`}
          className={"h-full rounded-xl"}
        />
      </div>
      <div className="relative py-12 md:py-24 lg:py-32">
        <div
          className={twJoin(
            "space-y-4 pl-6 pr-6 text-center md:w-1/2",
            orientation === "left"
              ? "md:ml-auto md:pl-12 lg:pl-16 xl:pl-24"
              : "md:mr-auto md:pr-12 lg:pr-16 xl:pr-24",
          )}
        >
          {eyebrow && <Eyebrow blockPalette={blockPalette} text={eyebrow} />}
          {title && <TitleText className="[text-wrap:balance]" blockPalette={blockPalette} title={title} />}
          {text && <SimpleText className="[text-wrap:balance]" text={text} />}
          {button && button[0] && (
            <LinkButton
              variant={button[0].variant}
              href={button[0].href}
              icon={button[0].icon}
            >
              {button[0].label}
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
}
