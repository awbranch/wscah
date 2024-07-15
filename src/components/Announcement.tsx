import React from "react";
import { Announcement as AnnouncementType } from "@/types/Announcement";
import Eyebrow from "@/components/Eyebrow";
import SimpleText from "@/components/SimpleText";
import { H2 } from "@/components/Typography";
import { userPaletteClasses } from "@/utils/globals";
import clsx from "clsx";

type AnnouncementProps = Omit<AnnouncementType, "_type" | "_key">;

export default function Announcement({
  blockId,
  blockPalette,
  style,
  eyebrow,
  title,
  text,
  button,
}: AnnouncementProps) {
  return (
    <div
      className={clsx("space-y-8 py-10 text-center text-white", {
        "bg-carrot-500": style === "orange",
        "bg-kale-700": style === "green",
        "bg-grape-600": style === "blue",
      })}
    >
      <div className={clsx("space-y-3")}>
        {eyebrow && (
          <div
            className={clsx("text-sm font-black uppercase md:text-base", {
              "text-grape-300": style === "blue",
              "text-white": style === "green" || style === "orange",
            })}
          >
            {eyebrow}
          </div>
        )}
        {title && <H2>{title}</H2>}
      </div>
      {text && <SimpleText className={"text-white"} text={text} />}
    </div>
  );
}
