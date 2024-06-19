import { ImageCard } from "@/types/ImageCard";
import { IconCard } from "@/types/IconCard";
import { DataCard } from "@/types/DataCard";
import { TitleCard } from "@/types/TitleCard";

export type MediaCard = 
| ImageCard
| IconCard
| DataCard
| TitleCard;

export type MediaCardProps = {
  _key: string;
}
