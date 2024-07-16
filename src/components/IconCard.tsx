import React from "react";
import { IconCard as IconCardType } from "@/types/IconCard";
import SvgImage from "@/components/SvgImage";
import { H2 } from "@/components/Typography";
import SimpleText from "@/components/SimpleText";
import { PsuedoButton, LinkButton } from "@/components/Button";
import WithLink from "@/components/WithLink";
import { Palette } from "@/types/Palette";
import { ClickArea, ButtonVariant } from "@/types/MediaCardSet";
import clsx from "clsx";

type IconCardProps = Omit<IconCardType, "_type" | "_key"> & {
  palette: Palette;
  clickArea: ClickArea;
  buttonVariant: ButtonVariant;
};

export default function IconCard({
  palette,
  icon,
  title,
  text,
  clickArea,
  buttonVariant,
  buttonLabel,
  href,
}: IconCardProps) {
  return (
    <WithLink
      href={clickArea === "card" || clickArea === "hybrid" ? href : undefined}
    >
      <div
        className={clsx(
          "flex h-full flex-col justify-between rounded-lg p-10",
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
        <div className="flex flex-col items-center gap-4 text-center">
          <SvgImage image={icon} />
          {title && (
            <H2
              className={clsx("my-0", {
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
                "mx-auto w-[26px] border-[3.5px] transition-all group-hover:w-[116px]",
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
            <SimpleText
              className={clsx("my-0 line-clamp-6 font-medium", {
                "text-white": palette === "blue",
                "text-mushroom-600": palette === "white" || palette === "gray",
              })}
              text={text}
            />
          )}
        </div>
        {clickArea === "hybrid" && buttonLabel && (
          <div
            className={clsx("text-center", {
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
            className={clsx("text-center", {
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
    </WithLink>
  );
}
