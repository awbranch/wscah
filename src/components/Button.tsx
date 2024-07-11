import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
} from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDownIcon,
} from "@heroicons/react/16/solid";
import { twMerge } from "tailwind-merge";
import { ButtonIcon, ButtonVariant } from "@/types/Button";
import Link from "next/link";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  icon?: ButtonIcon;
};

const classes =
  "inline-flex items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 py-4 text-base";

const variantClasses: { [S in ButtonVariant]: string } = {
  "orange-solid":
    "font-black px-6 bg-carrot-600 text-white hover:bg-carrot-700 focus-visible:outline-carrot-600",
  "white-solid":
    "font-black px-6 bg-white text-grape-500 hover:bg-grape-700 hover:text-white focus-visible:outline-white",
  "white-text":
    "font-bold px-2 text-white hover:text-carrot-500 focus-visible:outline-white",
  "blue-text":
    "font-bold px-2 text-grape-500 hover:text-grape-700 focus-visible:outline-grape-500",
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
      <ButtonContents icon={icon}>{children}</ButtonContents>
    </button>
  );
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  icon?: ButtonIcon;
};

export function LinkButton({
  href,
  variant = "orange-solid",
  icon,
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={twMerge(classes, variantClasses[variant], className)}
      {...props}
    >
      <ButtonContents icon={icon}>{children}</ButtonContents>
    </Link>
  );
}

type PsuedoButtonProps = HTMLAttributes<HTMLDivElement> & {
  variant?: ButtonVariant;
  icon?: ButtonIcon;
};

export function PsuedoButton({
  variant = "orange-solid",
  icon,
  className,
  children,
  ...props
}: PsuedoButtonProps) {
  return (
    <div
      className={twMerge(classes, variantClasses[variant], className)}
      {...props}
    >
      <ButtonContents icon={icon}>{children}</ButtonContents>
    </div>
  );
}

type ButtonContentsProps = {
  icon?: ButtonIcon;
  children: React.ReactNode;
};

function ButtonContents({ icon, children }: ButtonContentsProps) {
  return (
    <>
      {icon === "left" && (
        <ChevronLeftIcon className="h-6 w-6 flex-none" aria-hidden="true" />
      )}
      {children}
      {icon === "right" && (
        <ChevronRightIcon className="h-6 w-6 flex-none" aria-hidden="true" />
      )}
      {icon === "down" && (
        <ChevronDownIcon className="h-6 w-6 flex-none" aria-hidden="true" />
      )}
    </>
  );
}
