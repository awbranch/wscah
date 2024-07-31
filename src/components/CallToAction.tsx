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
    <div
      className={clsx("flex flex-col-reverse items-center gap-6", {
        "lg:flex-row": orientation === "left",
        "lg:flex-row-reverse": orientation === "right",
      })}
    >
      <div className={"flex-shrink-0 basis-2/5"}>
        <ResponsiveImage
          image={image}
          priority={false}
          sizes={`(max-width: ${breakpoints.md}px) 100vw, 50vw`}
          className={
            "aspect-square w-[504px] rounded-xl object-cover lg:aspect-[8/7]"
          }
        />
      </div>
      <div className={"mx-auto max-w-xl basis-3/5 space-y-4 text-center"}>
        {eyebrow && <Eyebrow blockPalette={blockPalette} text={eyebrow} />}
        {title && (
          <HighlightedTitle
            balanceText={false}
            textSize="lg"
            blockPalette={blockPalette}
            title={title}
          />
        )}
        {text && (
          <SimpleText className={clsx("[text-wrap:balance]")} text={text} />
        )}
        {buttons && buttons.length && (
          <div className="mx-auto flex w-fit flex-col justify-center gap-6 xs:flex-row">
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
  );
}
