import { ComponentProps } from "@/types/Component";

export type ProposedText = ComponentProps & {
  _type: "proposedText";
  text: string;
  copyButton: boolean;
};
