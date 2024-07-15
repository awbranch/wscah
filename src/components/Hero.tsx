import React from "react";
import { Hero as HeroType } from "@/types/Hero";
import { LinkButton } from "@/components/Button";
import HighlightedTitle from "@/components/HighlightedTitle";
import ResponsiveImage from "@/components/ResponsiveImage";
import { breakpoints } from "@/utils/globals";
import clsx from "clsx";
import { PortableText } from "@portabletext/react";
import { Link, Small } from "@/components/Typography";

type HeroProps = Omit<HeroType, "_type" | "_key">;

export default function Hero({
  blockId,
  blockPalette,
  title,
  subtitle,
  text,
  display,
  images,
  button,
}: HeroProps) {
  return (
    <div
      className={
        "mb-[300px] grid grid-flow-row items-center lg:auto-cols-fr lg:grid-flow-col"
      }
    >
      <div className={"flex flex-col items-center gap-6 px-[20px]"}>
        <HighlightedTitle
          title={title}
          blockPalette={blockPalette}
          alignment="center"
          textSize="xl"
        />
        <div className="text-center text-lg">{subtitle}</div>

        {button.length && (
          <LinkButton
            href={button[0].href}
            variant={button[0].variant}
            icon={button[0].icon}
          >
            {button[0].label}
          </LinkButton>
        )}
        {text && (
          <PortableText
            value={text}
            components={{
              marks: {
                link: ({ children, value }) => (
                  <Link href={value.href}>{children}</Link>
                ),
              },
              block: {
                normal: ({ children }) => <Small>{children}</Small>,
              },
            }}
          />
        )}
      </div>
      <div className="mt-10 flex justify-center lg:mt-0">
        <div className={"relative aspect-square h-auto w-full max-w-[580px]"}>
          {images.map((image, idx) => (
            <ResponsiveImage
              key={idx}
              image={image.image}
              priority={false}
              sizes={`(max-width: ${breakpoints.lg}px) 32rem, 50vw`}
              className={clsx(
                "absolute top-[15px] aspect-[5/8] w-[60%] rounded-2xl",
                {
                  "left-[7%] rotate-[-10deg]": idx === 0,
                  "left-[17%] rotate-[-5deg]": idx === 1,
                  "left-[27%]": idx === 2,
                  "left-[37%] rotate-[5deg]": idx === 3,
                },
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
