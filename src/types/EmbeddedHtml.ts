import { ComponentProps } from "@/types/Component";

export type EmbeddedHtml = ComponentProps & {
  _type: "embeddedHtml";
  html: string;
};
