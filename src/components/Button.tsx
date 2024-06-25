import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import { ButtonIcon, ButtonVariant } from "@/types/Button";
import Link from "next/link";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: ButtonIcon;
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  icon?: ButtonIcon;
};

const classes =
  "inline-flex items-center justify-center rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 gap-x-2 px-3.5 py-2 text-base";

const variantClasses: { [S in ButtonVariant]: string } = {
  "orange-solid":
    "bg-carrot-600 text-white hover:bg-carrot-700 focus-visible:outline-orange-700",
  "white-solid":
    "bg-white text-grape-500 hover:bg-grape-700 focus-visible:outline-white",
  "white-text": "text-white",
  "blue-text": "text-grape-500",
};

export function Button({
  variant = "orange-solid",
  icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(classes, variantClasses[variant], className)}
      {...props}
    >
      {icon === "left" && (
        <ChevronLeftIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
      {children}
      {icon === "right" && (
        <ChevronRightIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
      {icon === "down" && (
        <ChevronDownIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "orange-solid",
  icon,
  className,
  children,
  ...props
}: LinkProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        classes,
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {icon === "left" && (
        <ChevronLeftIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
      {children}
      {icon === "right" && (
        <ChevronRightIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
      {icon === "down" && (
        <ChevronDownIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
      )}
    </Link>
  );
}
