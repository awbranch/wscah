import React from "react";
import { PortableTextBlock } from "sanity";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import clsx from "clsx";

type TitleTextProps = {
  title: PortableTextBlock[];
  className?: string;
};

export default function TitleText({ title, className }: TitleTextProps) {
  return (
    <PortableText
      value={title}
      components={{
        block: {
          normal: ({ children }) => (
            <h1
              className={clsx(
                "text-4mxl font-bold leading-tight md:text-4xl",
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
