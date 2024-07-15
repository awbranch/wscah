import React from "react";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import { Palette } from "@/types/Palette";
import SimpleTitle from "@/components/SimpleTitle";

type HighlightedTitleProps = {
  title: PortableTextBlock[];
  blockPalette?: Palette;
  alignment?: "left" | "center" | "right";
  textSize?: "md" | "lg" | "xl";
  balanceText?: boolean;
};

export default function HighlightedTitle({
  title,
  blockPalette,
  alignment,
  textSize = "lg",
  balanceText = false,
}: HighlightedTitleProps) {
  return (
    <PortableText
      value={title}
      components={{
        block: {
          normal: ({ children }) => (
            <SimpleTitle
              blockPalette={blockPalette}
              alignment={alignment}
              textSize={textSize}
              balanceText={balanceText}
            >
              {children}
            </SimpleTitle>
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
            <span className="bg-kale-700 px-[1px] text-white">{children}</span>
          ),
        },
      }}
    />
  );
}
