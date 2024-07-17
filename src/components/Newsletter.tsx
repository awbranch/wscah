import React from "react";
import { Newsletter as NewsletterType } from "@/types/Newsletter";
import SimpleText from "@/components/SimpleText";
import { LinkButton } from "@/components/Button";
import clsx from "clsx";

export default function Newsletter({
  eyebrow,
  title,
  text,
  label,
  href,
}: NewsletterType) {
  return (
    <div className="space-y-8 text-center">
      <div className="mx-auto max-w-[650px] space-y-8">
        <div className="space-y-3">
          {eyebrow && (
            <div className={clsx("text-sm font-black uppercase md:text-base")}>
              {eyebrow}
            </div>
          )}
          {title && (
            <h1 className={"text-[25px] font-bold leading-[120%] md:text-4xl"}>
              {title}
            </h1>
          )}
          <div className="hidden md:block">
            {text && <SimpleText text={text} />}
          </div>
        </div>
      </div>
      {label && href && (
        <LinkButton href={href} variant={"orange-solid"}>
          {label}
        </LinkButton>
      )}
    </div>
  );
}
