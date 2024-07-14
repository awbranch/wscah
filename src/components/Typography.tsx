import React, { AnchorHTMLAttributes, HTMLAttributes } from "react";
import NextLink from "next/link";
import { twMerge } from "tailwind-merge";
import { isFullyQualifiedURL } from "@/utils/utils";

type Extended = {
  as?: string;
};

export const H1 = ({
  as,
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement> & Extended) =>
  React.createElement(
    as || "h1",
    {
      className: twMerge(
        "text-5mxl mb-4 mt-10 font-black leading-tight md:text-5xl",
        className,
      ),
      ...rest,
    },
    children,
  );

export const H2 = ({
  as,
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement> & Extended) =>
  React.createElement(
    as || "h2",
    {
      className: twMerge(
        "text-3mxl leading-tight md:text-3xl mb-4 mt-8 font-bold",
        className,
      ),
      ...rest,
    },
    children,
  );

export const H3 = ({
  as,
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement> & Extended) =>
  React.createElement(
    as || "h3",
    {
      className: twMerge(
        "text-2mxl mb-4 mt-8 font-bold leading-tight md:text-2xl",
        className,
      ),
      ...rest,
    },
    children,
  );

export const Para = ({
  as,
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement> & Extended) =>
  React.createElement(
    as || "p",
    {
      className: twMerge("mb-6 text-base leading-relaxed", className),
      ...rest,
    },
    children,
  );

export const Large = ({
  as,
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement> & Extended) =>
  React.createElement(
    as || "p",
    {
      className: twMerge("mb-6 text-lg leading-relaxed", className),
      ...rest,
    },
    children,
  );

export const Small = ({
  as,
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement> & Extended) =>
  React.createElement(
    as || "p",
    {
      className: twMerge("mb-6 text-sm leading-relaxed", className),
      ...rest,
    },
    children,
  );

export const XSmall = ({
  as,
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement> & Extended) =>
  React.createElement(
    as || "p",
    {
      className: twMerge("mb-6 text-xs leading-relaxed", className),
      ...rest,
    },
    children,
  );

export const BlockQuote = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) => {
  return (
    <blockquote
      className={twMerge("my-10 border-l-4 border-l-grape-500 pl-4", className)}
      {...rest}
    >
      {children}
    </blockquote>
  );
};

export const UL = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) => {
  return (
    <ul
      className={twMerge("mb-10 ml-6 mt-2 list-disc space-y-2", className)}
      {...rest}
    >
      {children}
    </ul>
  );
};

export const OL = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) => {
  return (
    <ol
      className={twMerge("mb-10 ml-6 mt-2 list-decimal space-y-2", className)}
      {...rest}
    >
      {children}
    </ol>
  );
};

export const Link = ({
  href = "#",
  children,
  className,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
}) => {
  return (
    <NextLink
      href={href}
      className={twMerge("underline underline-offset-2", className)}
      {...rest}
      {...(isFullyQualifiedURL(href)
        ? { target: "_blank", rel: "noreferrer noopener" }
        : {})}
    >
      {children}
    </NextLink>
  );
};

export const Strong = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) => {
  return (
    <strong className={twMerge("font-bold", className)} {...rest}>
      {children}
    </strong>
  );
};

export const Em = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement>) => {
  return (
    <em className={className} {...rest}>
      {children}
    </em>
  );
};
