import React from "react";
import { ImageCard as Props } from "@/types/ImageCard";
import { Palette } from "@/types/Palette";
import { ClickArea, ButtonVariant } from "@/types/MediaCardSet";
import { H2, Para } from "@/components/Typography";
import { PsuedoButton, LinkButton } from "@/components/Button";
import ResponsiveImage from "@/components/ResponsiveImage";
import WithLink from "@/components/WithLink";
import clsx from "clsx";

type ImageCardProps = Props & {
  palette?: Palette;
  clickArea: ClickArea;
  buttonVariant: ButtonVariant;
};

export default function ImageCard({
  palette = "white",
  image,
  title,
  text,
  clickArea,
  buttonVariant,
  buttonLabel,
  href,
}: ImageCardProps) {
  return (
    <WithLink
      href={clickArea === "card" || clickArea === "hybrid" ? href : undefined}
    >
      <div
        className={clsx(
          "flex h-full flex-col justify-between rounded-lg",
          {
            "bg-grape-500": palette === "blue",
            "bg-white": palette === "white",
            "bg-gray-100": palette === "gray",
          },
          (clickArea === "card" || clickArea === "hybrid") && [
            "group cursor-pointer",
            {
              "hover:bg-grape-700": palette === "blue",
              "hover:bg-gray-100": palette === "white",
              "hover:bg-white": palette === "gray",
            },
          ],
        )}
      >
        <ResponsiveImage
          className="aspect-[8/5] w-full rounded-t-lg"
          image={image}
          sizes={"100vw"}
        />

        <div className="p-10">
          <div className="flex flex-col gap-4">
            {title && (
              <H2
                className={clsx("my-0 text-2mxl md:text-2xl", {
                  "text-grape-600": palette === "white" || palette === "gray",
                  "text-white": palette === "blue",
                })}
              >
                {title}
              </H2>
            )}
            {title && text && (
              <hr
                className={clsx(
                  "w-[26px] border-[3.5px] transition-all group-hover:w-[116px]",
                  {
                    "border-carrot-500":
                      palette === "white" || palette === "gray",
                    "border-grape-300 group-hover:border-carrot-500":
                      palette === "blue",
                  },
                )}
              />
            )}
            {text && (
              <Para
                className={clsx("my-0 font-medium", {
                  "text-white": palette === "blue",
                  "text-mushroom-600":
                    palette === "white" || palette === "gray",
                })}
              >
                {text}
              </Para>
            )}
          </div>
          {clickArea === "hybrid" && buttonLabel && (
            <div
              className={clsx({
                "mt-6": buttonVariant === "solid",
              })}
            >
              <PsuedoButton
                variant={
                  buttonVariant === "solid"
                    ? "orange-solid"
                    : palette === "blue"
                      ? "white-text"
                      : "blue-text"
                }
                icon={buttonVariant === "text" ? "right" : undefined}
              >
                {buttonLabel}
              </PsuedoButton>
            </div>
          )}
          {clickArea === "button" && buttonLabel && href && (
            <div
              className={clsx({
                "mt-6": buttonVariant === "solid",
              })}
            >
              <LinkButton
                variant={
                  buttonVariant === "solid"
                    ? "orange-solid"
                    : palette === "blue"
                      ? "white-text"
                      : "blue-text"
                }
                icon={buttonVariant === "text" ? "right" : undefined}
                href={href}
              >
                {buttonLabel}
              </LinkButton>
            </div>
          )}
        </div>
      </div>
    </WithLink>
  );
}
