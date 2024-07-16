import { ComponentProps } from "@/types/Component";
import { Button } from "@/types/Button";

export type AnnouncementStyle = "orange" | "green" | "blue";

export type Announcement = ComponentProps & {
  _type: "announcement";
  style: AnnouncementStyle;
  eyebrow?: string;
  title: string;
  text?: string;
  buttonLabel: string;
  buttonHref: string;
};
