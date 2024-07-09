import React from "react";
import { MediaCardSet as Props } from "@/types/MediaCardSet";
import IconCard from "./IconCard";

export default function MediaCardSet({
  blockId,
  blockPalette,
  palette,
  cards,
}: Props) {
  return (
    <ul
      role="list"
      className="mx-auto grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3"
    >
      {cards.map((card) => (
        <li key={card._key}>
          {card._type === "iconCard" && (
            <IconCard {...card} palette={palette} />
          )}
        </li>
      ))}
    </ul>
  );
}
