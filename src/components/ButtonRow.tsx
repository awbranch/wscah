import React from "react";
import { ButtonRow as ButtonRowType } from "@/types/ButtonRow";
import { LinkButton } from "@/components/Button";
import { twJoin } from "tailwind-merge";

type ButtonRowProps = Omit<ButtonRowType, "_type" | "_key">;

export default function ButtonRow({ alignment, buttons }: ButtonRowProps) {
  return (
    <div
      className={twJoin(
        "my-4 flex flex-col gap-6 xs:flex-row",
        alignment === "left" && "justify-start",
        alignment === "center" && "justify-center",
        alignment === "right" && "justify-end",
      )}
    >
      {buttons.map((b) => (
        <LinkButton
          key={b._key}
          variant={b.variant}
          href={b.href}
          icon={b.icon}
        >
          {b.label}
        </LinkButton>
      ))}
    </div>
  );
}
