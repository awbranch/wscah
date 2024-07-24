import React from "react";
import { EmbeddedHtml as EmbeddedHtmlType } from "@/types/EmbeddedHtml";

type EmbeddedHtmlProps = Omit<EmbeddedHtmlType, "_type" | "_key">;

export default function EmbeddedHtml({ html }: EmbeddedHtmlProps) {
  return (
    <div
      className={"mx-auto flex justify-center"}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
