import React from "react";
import { Article as Props } from "@/types/Article";
import { PortableText } from "@portabletext/react";
import ResponsiveImage from "@/components/ResponsiveImage";
import { CaptionedImage } from "@/types/CaptionedImage";
import ButtonRow from "@/components/ButtonRow";
import { ButtonRow as ButtonRowType } from "@/types/ButtonRow";
import { twMerge } from "tailwind-merge";
  import { userHeaderClasses } from "@/utils/globals";

export default function Article({ blockPalette, text, columns }: Props) {
  const palette = blockPalette || "white";
  return (
    <div className={"margins-y-0"}>
      <PortableText
        value={text}
        components={{
          block: {
            h1: ({ children }) => (
              <h1
                className={twMerge(
                  "text-5mxl mb-4 mt-10 font-black leading-tight md:text-5xl",
                  userHeaderClasses[palette],
                )}
              >
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2
                className={twMerge(
                  "text-3mxl leading-tightmd:text-3xl mb-4 mt-8 font-bold",
                  userHeaderClasses[palette],
                )}
              >
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3
                className={twMerge(
                  "text-2mxl mb-4 mt-8 font-bold leading-tight md:text-2xl",
                  userHeaderClasses[palette],
                )}
              >
                {children}
              </h3>
            ),
            normal: ({ children }) => (
              <p className="mb-6 text-base leading-relaxed">{children}</p>
            ),
            large: ({ children }) => (
              <p className="mb-6 text-lg leading-relaxed">{children}</p>
            ),
            small: ({ children }) => (
              <p className="mb-6 text-sm leading-relaxed">{children}</p>
            ),
            xsmall: ({ children }) => (
              <p className="mb-6 text-xs leading-relaxed">{children}</p>
            ),
            blockquote: ({ children }) => (
              <blockquote className="my-10 border-l-4 border-l-grape-500 pl-4">
                {children}
              </blockquote>
            ),
          },
          list: {
            bullet: ({ children }) => (
              <ul className="mb-10 ml-6 mt-2 list-disc space-y-2">
                {children}
              </ul>
            ),
            number: ({ children }) => (
              <ol className="mb-10 ml-6 mt-2 list-decimal space-y-2">
                {children}
              </ol>
            ),
          },
          types: {
            image: ({ value }: { value: CaptionedImage }) => {
              return (
                <figure className={"my-12 w-full"}>
                  <ResponsiveImage
                    className="w-full rounded-xl"
                    image={value}
                    sizes={"100vw"}
                  />
                  {value.caption && (
                    <figcaption
                      className={
                        "mt-2 hidden text-center text-xs font-medium opacity-40 xs:block"
                      }
                    >
                      {value.caption}
                    </figcaption>
                  )}
                </figure>
              );
            },
            buttonRow: ({ value }: { value: ButtonRowType }) => {
              return <ButtonRow {...value} />;
            },
          },
        }}
      />
    </div>
  );
}
