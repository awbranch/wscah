import React from "react";
import { Title as Props } from "@/types/Title";
import TitleText from "@/components/TitleText";
import clsx from "clsx";

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
          "text-white": blockPalette === "blue",
          "text-grape-500": blockPalette !== "blue",
        },
        "mx-auto",
      )}
    >
      {eyebrow && (
        <div
          className={clsx(
            "text-mxl mb-4 font-black uppercase md:text-xl",

            {
              "text-grape-400": blockPalette !== "blue",
              "text-white": blockPalette === "blue",
            },
          )}
        >
          {eyebrow}
        </div>
      )}
      {title && <TitleText className={"[text-wrap:balance]"} title={title} />}
      {text && <p className="mt-4 text-base [text-wrap:balance]">{text}</p>}
    </div>
  );
}
