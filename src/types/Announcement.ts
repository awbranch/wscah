import { ComponentProps } from "@/types/Component";
import { PortableTextBlock, Slug } from "sanity";
import { Button } from "@/types/Button";

export type AnnouncementStyle = 'orange' | 'green' | 'blue';

export type Announcement = ComponentProps & {
  _type: "announcement";
  style: AnnouncementStyle;
  eyebrow?: string;
  title: PortableTextBlock[];
  text?: string;
  button?: Button;
};
