import React from "react";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import { Palette } from "@/types/Palette";
import { twMerge } from "tailwind-merge";
import { userHeaderClasses } from "@/utils/globals";

type TitleTextProps = {
  title: PortableTextBlock[];
  blockPalette?: Palette;
  className?: string;
};

export default function TitleText({
  title,
  blockPalette,
  className,
}: TitleTextProps) {
  return (
    <PortableText
      value={title}
      components={{
        block: {
          normal: ({ children }) => (
            <h1
              className={twMerge(
                "text-5mxl font-black leading-[120%] md:text-5xl",
                userHeaderClasses[blockPalette || "white"],
                className,
              )}
            >
              {children}
            </h1>
          ),
        },
        marks: {
          "highlight-blue": ({ children }) => (
            <span className="bg-grape-400 px-[1px] text-white">{children}</span>
          ),
          "highlight-orange": ({ children }) => (
            <span className="bg-carrot-600 px-[1px] text-white">
              {children}
            </span>
          ),
          "highlight-green": ({ children }) => (
            <span className="bg-kale-600 px-[1px] text-white">{children}</span>
          ),
        },
      }}
    />
  );
}
