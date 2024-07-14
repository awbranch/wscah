import React from "react";
import { IFrame as IFrameType } from "@/types/IFrame";

type IFrameProps = Omit<IFrameType, "_type" | "_key">;

export default function IFrame({
  blockId,
  blockPalette,
  code,
}: IFrameProps) {
  return <div>IFRAME GOES HERE</div>;
}
