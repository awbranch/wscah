import React from "react";
import { twMerge } from "tailwind-merge";
import Container from "@/components/Container";
import { PageWidth } from "@/types/Page";
import { Palette } from "@/types/Palette";

import { userPaletteClasses } from "@/utils/globals";

type Props = {
  id?: string;
  palette?: Palette;
  maxWidth?: PageWidth;
  className?: string;
  children: React.ReactNode;
};

export default function Section({
  id,
  palette = "white",
  maxWidth = "lg",
  className,
  children,
}: Props) {
  console.log(`Section: ${palette} - ${userPaletteClasses[palette]?.block}`);
  return (
    <section
      id={id}
      className={twMerge(
        "py-16 md:py-20",
        userPaletteClasses[palette]?.block,
        className,
      )}
    >
      <Container maxWidth={maxWidth}>{children}</Container>
    </section>
  );
}
