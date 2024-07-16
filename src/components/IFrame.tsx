import React from "react";
import { IFrame as IFrameType } from "@/types/IFrame";

type IFrameProps = Omit<IFrameType, "_type" | "_key">;

export default function IFrame({ code }: IFrameProps) {
  return (
    <div
      className={"mx-auto flex justify-center"}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}
