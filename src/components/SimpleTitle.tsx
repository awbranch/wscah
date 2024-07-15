import React from "react";
import { Palette } from "@/types/Palette";
import { userHeaderClasses } from "@/utils/globals";
import clsx from "clsx";

type SimpleTitleProps = {
  blockPalette?: Palette;
  alignment?: "left" | "center" | "right";
  textSize?: "md" | "lg" | "xl";
  balanceText?: boolean;
  children: React.ReactNode;
};

export default function SimpleTitle({
  children,
  blockPalette,
  alignment,
  textSize = "lg",
  balanceText = false,
}: SimpleTitleProps) {
  return (
    <h1
      className={clsx(
        "leading-[120%]",
        {
          "[text-wrap:balance]": balanceText,
          "text-[32px] font-black md:text-6xl": textSize === "xl",
          "text-[30px] font-black md:text-5xl": textSize === "lg",
          "text-[25px] font-bold md:text-4xl": textSize === "md",
          "text-left": alignment === "left",
          "text-center": alignment === "center",
          "text-right": alignment === "right",
        },
        userHeaderClasses[blockPalette || "white"],
      )}
    >
      {children}
    </h1>
  );
}
