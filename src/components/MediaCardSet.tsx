import React from "react";
import { MediaCardSet as Props } from "@/types/MediaCardSet";
import IconCard from "./IconCard";
import clsx from "clsx";

export default function MediaCardSet({
  blockId,
  blockPalette,
  palette,
  clickArea,
  buttonVariant,
  cards,
}: Props) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 justify-items-center lg:grid-cols-2 lg:gap-y-6 xl:grid-cols-3 xl:gap-y-0"
    >
      {cards.map((card, idx) => (
        <li
          key={card._key}
          className={clsx("max-w-md", {
            "mt-3 border-t border-grape-300 pt-3 lg:mt-0 lg:border-0 lg:pt-0 xl:ml-3 xl:border-l xl:pl-3":
              idx !== 0,
            "ml-0 xl:ml-6": idx === 0,
            "lg:col-span-2 xl:col-span-1":
              idx === cards.length - 1 && cards.length % 2 === 1,
          })}
        >
          {card._type === "iconCard" && (
            <IconCard
              {...card}
              palette={palette || blockPalette}
              clickArea={clickArea}
              buttonVariant={buttonVariant}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
