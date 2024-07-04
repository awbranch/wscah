"use client";
import React, { useEffect, useState } from "react";
import { PortableTextBlock } from "sanity";
import { XMarkIcon } from "@heroicons/react/16/solid";
import AlertRichText from "@/components/AlertRichText";
import { twJoin } from "tailwind-merge";
import { AlertPalette } from "@/types/Header";
import { blocksToText } from "@/utils/utils";
import clsx from "clsx";

type Props = {
  message: PortableTextBlock[];
  palette: AlertPalette;
};

export default function AlertBar({ message, palette }: Props) {
  const [barVisible, setBarVisible] = useState(false);

  useEffect(() => {
    const curentMessage = blocksToText(message);
    const lastMessage = window.localStorage.getItem("alertMessage") || "";
    const modified = lastMessage !== curentMessage;

    setBarVisible(modified);
  }, [message]);

  const onAlertClosed = () => {
    setBarVisible(false);

    // Set the current message so that we don't show it until it changes
    localStorage.setItem("alertMessage", blocksToText(message));
  };

  return (
    <div
      className={twJoin(
        clsx(
          barVisible ? "flex" : "hidden",
          "min-h-[60px] items-center justify-center gap-x-3 px-6 py-3 text-white sm:px-3.5",
          {
            "bg-grape-500": palette === "blue",
            "bg-grape-700": palette === "dark-blue",
            "bg-carrot-600": palette === "orange",
          },
        ),
      )}
    >
      <div className="text-sm">
        <AlertRichText message={message}></AlertRichText>
      </div>
      <button
        type="button"
        className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        onClick={() => onAlertClosed()}
      >
        <span className="sr-only">Dismiss</span>
        <XMarkIcon className={"h-4 w-4"} aria-hidden="true" />
      </button>
    </div>
  );
}
