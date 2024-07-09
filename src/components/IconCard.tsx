import React from "react";
import { IconCard as Props } from "@/types/IconCard";
import SvgImage from "@/components/SvgImage";
import { H2, Para } from "@/components/Typography";
import { LinkButton } from "@/components/Button";
import WithLink from "@/components/WithLink";

export default function IconCard({
  palette,
  icon,
  title,
  text,
  button,
  href,
}: Props) {
  return (
    <WithLink href={href}>
      <div className="group flex h-full cursor-pointer flex-col justify-between rounded-lg p-10 hover:bg-grape-700">
        <div className="flex flex-col items-center gap-4 text-center">
          <SvgImage image={icon} />
          {title && <H2 className="my-0">{title}</H2>}
          {title && text && (
            <hr className="mx-auto w-[26px] border-[3.5px] border-grape-300 transition-all group-hover:w-[116px] group-hover:border-carrot-500" />
          )}
          {text && <Para className="my-0">{text}</Para>}
        </div>
        {/* {button.length && (
          <div className="text-center">
            <LinkButton
              href={button[0].href}
              variant={button[0].variant}
              icon={button[0].icon}
            >
              {button[0].label}
            </LinkButton>
          </div>
        )} */}
      </div>
    </WithLink>
  );
}
