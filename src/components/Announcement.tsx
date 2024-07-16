import React from "react";
import {
  Announcement as AnnouncementType,
  AnnouncementStyle,
} from "@/types/Announcement";
import SimpleText from "@/components/SimpleText";
import { LinkButton } from "@/components/Button";
import clsx from "clsx";
import ReactDOMServer from "react-dom/server";
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
      className={clsx("rounded-lg", {
        "bg-carrot-600": style === "orange",
        "bg-kale-700": style === "green",
        "bg-grape-600": style === "blue",
      })}
      style={{
        backgroundImage: `url('/angle-${style}.png')`,
        backgroundSize: "100% 200px",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="space-y-8 rounded-lg px-10 py-16 text-center text-white">
        <div className="mx-auto max-w-[700px] space-y-8">
          <div className="space-y-3">
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
            {title && (
              <h1
                className={"text-[25px] font-bold leading-[120%] md:text-4xl"}
              >
                {title}
              </h1>
            )}
            {text && <SimpleText className={"text-white"} text={text} />}
          </div>
        </div>
        {button[0] && (
          <LinkButton
            href={button[0].href}
            variant={button[0].variant}
            icon={button[0].icon}
          >
            {button[0].label}
          </LinkButton>
        )}
      </div>
    </div>
  );
}
