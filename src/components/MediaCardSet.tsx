import React from "react";
import { MediaCardSet as Props } from "@/types/MediaCardSet";
import IconCard from "@/components/IconCard";
import ImageCard from "@/components/ImageCard";
import TitleCard from "@/components/TitleCard";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export default function MediaCardSet({
  blockPalette = "white",
  palette,
  clickArea,
  buttonVariant,
  cards,
}: Props) {
  const cardPalette = palette || blockPalette;
  return (
    <div className="mx-auto flex justify-center">
      <ul
        role="list"
        className={twMerge(
          clsx(
            "inline-grid grid-cols-1 justify-items-center lg:grid-cols-2 xl:grid-cols-3",
            blockPalette === cardPalette && "lg:gap-y-6",
            blockPalette !== cardPalette && "gap-6",
          ),
        )}
      >
        {cards.map((card, idx) => (
          <li
            key={card._key}
            className={twMerge(
              clsx(
                "max-w-md",
                blockPalette === cardPalette && [
                  {
                    "border-grape-300": cardPalette === "blue",
                    "border-gray-200": cardPalette === "white",
                    "border-gray-300": cardPalette === "gray",
                  },
                  {
                    "mt-3 border-t pt-3 lg:mt-0 lg:border-t-0 lg:pt-0": idx > 0,
                  },
                  {
                    "lg:ml-3 lg:border-l lg:pl-3 xl:ml-0 xl:border-l-0 xl:pl-0":
                      idx % 2 !== 0,
                  },
                  {
                    "xl:ml-3 xl:border-l xl:pl-3": idx % 3 !== 0,
                  },
                ],
                {
                  "lg:col-span-2 xl:col-span-1":
                    idx === cards.length - 1 && cards.length % 2 === 1,
                },
              ),
            )}
          >
            {card._type === "iconCard" && (
              <IconCard
                {...card}
                palette={cardPalette}
                clickArea={clickArea}
                buttonVariant={buttonVariant}
              />
            )}
            {card._type === "imageCard" && (
              <ImageCard
                {...card}
                palette={cardPalette}
                clickArea={clickArea}
                buttonVariant={buttonVariant}
              />
            )}
            {card._type === "titleCard" && (
              <TitleCard {...card} blockPalette={blockPalette} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
