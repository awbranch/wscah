import React from "react";
import { Title as Props } from "@/types/Title";
import Eyebrow from "@/components/Eyebrow";
import TitleText from "@/components/TitleText";
import clsx from "clsx";
import SimpleText from "./SimpleText";

export default function Title({
  blockPalette,
  eyebrow,
  title,
  text,
  alignment,
  maxWidth,
}: Props) {
  return (
    <div
      className={clsx(
        {
          "text-center": alignment === "center",
          "text-right": alignment === "right",
          "text-left": alignment === "left",
          "max-w-2xl": maxWidth === "xs",
          "max-w-3xl": maxWidth === "sm",
          "max-w-4xl": maxWidth === "md",
          "max-w-5xl": maxWidth === "lg",
        },
        "mx-auto space-y-4",
      )}
    >
      {eyebrow && <Eyebrow blockPalette={blockPalette} text={eyebrow} />}
      {title && (
        <TitleText
          className="[text-wrap:balance]"
          blockPalette={blockPalette}
          title={title}
        />
      )}
      {text && <SimpleText className="[text-wrap:balance]" text={text} />}
    </div>
  );
}
