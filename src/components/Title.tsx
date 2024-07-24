import React from "react";
import { Title as TitleType } from "@/types/Title";
import Eyebrow from "@/components/Eyebrow";
import HighlightedTitle from "@/components/HighlightedTitle";
import clsx from "clsx";
import SimpleText from "@/components/SimpleText";

type TileProps = Omit<TitleType, "_type" | "_key">;

export default function Title({
  blockPalette = "white",
  eyebrow,
  title,
  titleSize,
  text,
  alignment,
  maxWidth,
}: TileProps) {
  return (
    <div
      className={clsx("space-y-8", {
        "mx-auto text-center": alignment === "center",
        "text-right": alignment === "right",
        "text-left": alignment === "left",
        "max-w-2xl": maxWidth === "xs",
        "max-w-3xl": maxWidth === "sm",
        "max-w-4xl": maxWidth === "md",
        "max-w-5xl": maxWidth === "lg",
      })}
    >
      <div className={clsx("space-y-3")}>
        {eyebrow && <Eyebrow blockPalette={blockPalette} text={eyebrow} />}
        {title && (
          <HighlightedTitle
            textSize={titleSize}
            blockPalette={blockPalette}
            title={title}
          />
        )}
      </div>
      {text && (
        <SimpleText
          className={clsx({
            "text-grape-600":
              blockPalette === "white" || blockPalette === "gray",
            "text-white": blockPalette === "blue",
          })}
          text={text}
        />
      )}
    </div>
  );
}
