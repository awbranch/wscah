import { Slug } from "sanity";
import { CallToAction } from "@/types/CallToAction";
import { FillColor } from "@/types/FillColor";

export type CallToActionBlock = {
  _type: "callToActionBlock";
  _key: string;
  id?: Slug;
  fill: FillColor;
  callToAction: CallToAction;
};
