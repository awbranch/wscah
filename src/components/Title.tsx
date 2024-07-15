import React from "react";
import { Title as Props } from "@/types/Title";
import Eyebrow from "@/components/Eyebrow";
import TitleText from "@/components/TitleText";
import clsx from "clsx";
import SimpleText from "./SimpleText";

type TileProps = Omit<Props, "_type" | "_key">;

export default function Title({
  blockPalette,
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
          <TitleText
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
