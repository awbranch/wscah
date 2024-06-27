import React from "react";
import { Article as Props } from "@/types/Article";
import { PortableText } from "@portabletext/react";

export default function Article({
  blockId,
  blockPalette,
  text,
  columns,
}: Props) {
  return (
    <div className={"margins-y-0"}>
      <PortableText value={text} />
    </div>
  );
}
