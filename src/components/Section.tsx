import React from "react";
import { twMerge } from "tailwind-merge";
import Container from "@/components/Container";
import { PageWidth } from "@/types/Page";
import { Palette } from "@/types/Palette";
import { userPaletteClasses } from "@/utils/globals";
import clsx from "clsx";

type SectionProps = {
  id?: string;
  palette?: Palette;
  maxWidth?: PageWidth;
  wallpaper?: "bottom" | "below-hero";
  children: React.ReactNode;
};

export default function Section({
  id,
  palette = "white",
  maxWidth = "lg",
  wallpaper,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "py-16 md:py-20",
        userPaletteClasses[palette]?.block,
        !!wallpaper && "bg-[url('/confetti.svg')] bg-no-repeat",
        wallpaper === "below-hero" && [
          "bg-[length:1296px_540px] md:bg-[length:1440px_600px]",
          "bg-[top_590px_center] xs:bg-[top_640px_center] md:bg-[top_680px_center] lg:bg-[top_340px_center]",
        ],
        wallpaper === "bottom" && [
          "bg-[length:1296px_540px] md:bg-[length:1440px_600px]",
          "bg-[bottom_-120px_center] md:bg-[bottom_-140px_center]",
        ],
      )}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </section>
  );
}
