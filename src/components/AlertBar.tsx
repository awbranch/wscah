"use client";
import React, { useState } from "react";
import { PortableTextBlock } from "sanity";
import { XMarkIcon } from "@heroicons/react/20/solid";
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
        "items-center gap-x-6 bg-grape-700 px-6 py-2.5 text-white sm:px-3.5 sm:before:flex-1",
      )}
    >
      <div className="text-sm leading-6">
        <AlertRichText message={message}></AlertRichText>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={() => setBarVisible(false)}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className={"h-4 w-4"} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
