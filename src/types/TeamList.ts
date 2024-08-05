import { Reference } from "sanity";
import { ComponentProps } from "@/types/Component";

export type TeamList = ComponentProps & {
  _type: "teamList";
  team?: Reference;
};
