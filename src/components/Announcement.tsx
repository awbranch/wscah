import React from "react";
import { Announcement as AnnouncementType } from "@/types/Announcement";

type AnnouncementProps = Omit<AnnouncementType, "_type" | "_key">;

export default function Announcement({
  blockId,
  blockPalette,
  style,
  eyebrow,
  title,
  text,
  button,
}: AnnouncementProps) {
  return <div>ANNOUNCEMENT GOES HERE</div>;
}
