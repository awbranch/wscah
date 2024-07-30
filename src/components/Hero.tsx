import React from "react";
import { Hero as HeroType } from "@/types/Hero";
import { LinkButton } from "@/components/Button";
import HighlightedTitle from "@/components/HighlightedTitle";
import ResponsiveImage from "@/components/ResponsiveImage";
import { breakpoints } from "@/utils/globals";
import clsx from "clsx";
import { PortableText } from "@portabletext/react";
import { Link, Small } from "@/components/Typography";
import SimpleText from "@/components/SimpleText";

type HeroProps = Omit<HeroType, "_type" | "_key"> & {
  componentsBelow?: boolean;
};

export default function Hero({
  blockPalette,
  title,
  subtitle,
  text,
  display,
  images,
  button,
  wallpaper = false,
  componentsBelow = false,
}: HeroProps) {
  return (
    <div
      className={clsx({
        // Make extra room for the wallpaper
        "min-h-[940px] xs:min-h-[1000px] md:min-h-[1100px] lg:min-h-[750px]":
          wallpaper && componentsBelow,
        "mb-[120px]": wallpaper && !componentsBelow,
      })}
    >
      <div
        className={
          "grid grid-flow-row items-center lg:auto-cols-fr lg:grid-flow-col"
        }
      >
        <div className={"flex flex-col items-center gap-6 px-[20px]"}>
          <HighlightedTitle
            title={title}
            blockPalette={blockPalette}
            alignment="center"
            textSize="xl"
          />
          {subtitle && (
            <div className="text-center text-lg">
              <SimpleText text={subtitle} />
            </div>
          )}

          {button && button.length && (
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
        <div className="flex items-center justify-center lg:mt-0">
          {display === "fan" && images.length === 4 && (
            <div
              className={
                "relative mt-10 aspect-square h-auto w-full max-w-[580px] lg:mt-5"
              }
            >
              {images.map((image, idx) => (
                <ResponsiveImage
                  key={idx}
                  image={image.image}
                  priority={false}
                  sizes={`(max-width: ${breakpoints.lg}px) 32rem, 50vw`}
                  className={clsx(
                    "absolute top-0 aspect-[5/8] w-[60%] rounded-2xl object-cover",
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
          )}

          {display === "single" && images.length === 1 && (
            <div className="mt-6 lg:mt-0">
              <ResponsiveImage
                image={images[0].image}
                priority={false}
                sizes={`50vw`}
                className={
                  "aspect-square h-[540px] w-full rounded-xl object-cover"
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
