import React from "react";
import { Article as ArticleType } from "@/types/Article";
import { PortableText } from "@portabletext/react";
import ResponsiveImage from "@/components/ResponsiveImage";
import { CaptionedImage } from "@/types/CaptionedImage";
import ButtonRow from "@/components/ButtonRow";
import { ButtonRow as ButtonRowType } from "@/types/ButtonRow";
import { userHeaderClasses } from "@/utils/globals";
import {
  BlockQuote,
  Em,
  H1,
  H2,
  H3,
  Link,
  OL,
  Para,
  Large,
  Small,
  XSmall,
  Strong,
  UL,
} from "@/components/Typography";

type ArticleProps = Omit<ArticleType, "_type" | "_key">;

export default function Article({ blockPalette, text, columns }: ArticleProps) {
  const palette = blockPalette || "white";
  return (
    <div className={"margins-y-0"}>
      <PortableText
        value={text}
        components={{
          marks: {
            link: ({ children, value }) => (
              <Link href={value.href}>{children}</Link>
            ),
            em: ({ children }) => <Em>{children}</Em>,
            strong: ({ children }) => <Strong>{children}</Strong>,
          },
          block: {
            h1: ({ children }) => (
              <H1 className={userHeaderClasses[palette]}>{children}</H1>
            ),
            h2: ({ children }) => (
              <H2 className={userHeaderClasses[palette]}>{children}</H2>
            ),
            h3: ({ children }) => (
              <H3 className={userHeaderClasses[palette]}>{children}</H3>
            ),
            normal: ({ children }) => <Para>{children}</Para>,
            large: ({ children }) => <Large>{children}</Large>,
            small: ({ children }) => <Small>{children}</Small>,
            xsmall: ({ children }) => <XSmall>{children}</XSmall>,
            blockquote: ({ children }) => <BlockQuote>{children}</BlockQuote>,
          },
          list: {
            bullet: ({ children }) => <UL>{children}</UL>,
            number: ({ children }) => <OL>{children}</OL>,
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
