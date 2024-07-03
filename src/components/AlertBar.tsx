"use client";
import React, { useState } from "react";
import { PortableTextBlock } from "sanity";
import { XMarkIcon } from "@heroicons/react/16/solid";
import AlertRichText from "@/components/AlertRichText";
import { twJoin } from "tailwind-merge";
import { Palette } from "@/types/Palette";
import { userPaletteClasses } from "@/utils/globals";

type Props = {
  message: PortableTextBlock[];
};

export default function AlertBar({ message }: Props) {
  const [barVisible, setBarVisible] = useState(true);

  return (
    <div
      className={twJoin(
        barVisible ? "flex" : "hidden",
        "min-h-[60px] items-center justify-center gap-x-3 bg-grape-700 px-6 text-white sm:px-3.5",
      )}
    >
      <div className="text-sm">
        <AlertRichText message={message}></AlertRichText>
      </div>
      <button
        type="button"
        className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        onClick={() => setBarVisible(false)}
      >
        <span className="sr-only">Dismiss</span>
        <XMarkIcon className={"h-4 w-4"} aria-hidden="true" />
      </button>
    </div>
  );
}
