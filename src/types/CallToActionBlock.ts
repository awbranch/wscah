import { Slug } from "sanity";
import { CallToAction } from "@/types/CallToAction";
import { BlockStyle } from "@/types/BlockStyle";

export type CallToActionBlock = {
  _type: "callToActionBlock";
  _key: string;
  id?: Slug;
  style: BlockStyle;
  callToAction: CallToAction;
};
