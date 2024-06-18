import { Component, ComponentProps } from "@/types/Component";

export type FlexBox = ComponentProps & {
  _type: "flexBox";
  width: "full" | "content";
  spacing: "sm" | "md" | "lg";
  components: Component[];
};
