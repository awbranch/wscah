import React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { twJoin } from "tailwind-merge";
import { PopoverButton } from "@headlessui/react";
import type { Palette } from "@/types/Palette";

type Variant = "text" | "button";

const commonClasses = "flex items-center text-base";

const variantClasses: { [V in Variant]: string } = {
  text: "rounded-full px-6 py-3 font-medium",
  button: "rounded-md ml-2 px-6 py-4 font-black",
};

const paletteClasses: { [V in Variant]: { [P in Palette]: string } } = {
  text: {
    white:
      "text-grape-600 ui-open:bg-grape-700 ui-open:text-white hover:text-white hover:bg-grape-700",
    gray: "text-grape-600 ui-open:bg-grape-700 ui-open:text-white hover:text-white hover:bg-grape-700",
    blue: "text-white ui-open:bg-grape-700 hover:bg-grape-700",
  },
  button: {
    white:
      "bg-carrot-600 text-white hover:bg-carrot-700 focus-visible:outline-carrot-600",
    gray: "bg-carrot-600 text-white hover:bg-carrot-700 focus-visible:outline-carrot-600",
    blue: "bg-carrot-600 text-white hover:bg-carrot-700 focus-visible:outline-carrot-600",
  },
};

type Props = {
  palette: Palette;
  variant: Variant;
  name: string;
} & (
  | {
      submenu: true;
    }
  | {
      submenu: false;
      href: string;
    }
);

export default function MenuButton(props: Props) {
  const { submenu, name, variant, palette } = props;
  return submenu ? (
    <PopoverButton
      className={twJoin(
        commonClasses,
        variantClasses[variant],
        paletteClasses[variant][palette],
      )}
    >
      {name}
      <ChevronDownIcon className="h-6 w-6 flex-none" aria-hidden="true" />
    </PopoverButton>
  ) : (
    <Link
      className={twJoin(
        commonClasses,
        variantClasses[variant],
        paletteClasses[variant][palette],
      )}
      href={props.href}
    >
      {name}
    </Link>
  );
}
