import React from "react";
import { TitleCard as TitleCardType } from "@/types/TitleCard";
import { Palette } from "@/types/Palette";
import Title from "@/components/Title";

type TitleCardProps = Omit<TitleCardType, "_type" | "_key"> & {
  blockPalette: Palette;
};

export default function TitleCard({
  blockPalette,
  eyebrow,
  title,
  text,
}: TitleCardProps) {
  return (
    <div className="mb-10 pr-6">
      <Title
        blockPalette={blockPalette}
        eyebrow={eyebrow}
        title={title}
        text={text}
        alignment="left"
      />
    </div>
  );
}
