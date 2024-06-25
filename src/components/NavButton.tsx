import React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { PopoverButton } from "@headlessui/react";
import type { Palette } from "@/types/Palette";

const classes = "rounded-full px-6 py-3 text-base font-medium";

type Variant = "text" | "button";

const variantClasses: { [V in Variant]: string } = {
  text: "block",
  button: "flex items-center",
};

const paletteClasses: { [P in Palette]: string } = {
  white: "text-white ui-open:bg-grape-700 hover:bg-grape-700",
  gray: "text-white ui-open:bg-grape-700 hover:bg-grape-700",
  blue: "text-white ui-open:bg-grape-700 hover:bg-grape-700",
  "dark-blue": "text-white ui-open:bg-grape-700 hover:bg-grape-700",
};

type NavButtonProps = {
  palette: Palette;
  name: string;
};

export function NavButton({ name, palette }: NavButtonProps) {
  return (
    <PopoverButton
      className={twMerge(
        classes,
        variantClasses.button,
        paletteClasses[palette],
      )}
    >
      {name}
      <ChevronDownIcon className="h-6 w-6 flex-none" aria-hidden="true" />
    </PopoverButton>
  );
}

type NavLinkProps = {
  palette: Palette;
  name: string;
  href: string;
};

export function NavLink({ name, palette, href }: NavLinkProps) {
  return (
    <Link className={twMerge(classes, 
      variantClasses.text,
      paletteClasses[palette])} href={href}>
      {name}
    </Link>
  );
}
