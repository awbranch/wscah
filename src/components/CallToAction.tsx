import React from "react";
import { twJoin } from "tailwind-merge";
import { CallToAction as CallToActionType } from "@/types/CallToAction";
import HighlightedTitle from "@/components/HighlightedTitle";
import Eyebrow from "@/components/Eyebrow";
import SimpleText from "@/components/SimpleText";
import ResponsiveImage from "@/components/ResponsiveImage";
import { breakpoints, userPaletteButtonProps } from "@/utils/globals";
import { LinkButton } from "@/components/Button";
import clsx from "clsx";

type CallToActionProps = Omit<CallToActionType, "_type" | "_key">;

export default function CallToAction({
  blockPalette = "white",
  orientation,
  image,
  eyebrow,
  title,
  text,
  buttons,
}: CallToActionProps) {
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
          className={"w-full rounded-xl object-cover"}
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
          {title && (
            <HighlightedTitle
              balanceText={true}
              textSize="lg"
              blockPalette={blockPalette}
              title={title}
            />
          )}
          {text && (
            <SimpleText className={clsx("[text-wrap:balance]")} text={text} />
          )}
          {buttons && buttons.length && (
            <div className="flex flex-col justify-center gap-6 xs:flex-row">
              {buttons.map((b) => (
                <LinkButton
                  key={b._key}
                  href={b.href}
                  variant={b.variant}
                  icon={b.icon}
                >
                  {b.label}
                </LinkButton>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
