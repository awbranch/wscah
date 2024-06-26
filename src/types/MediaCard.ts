import { ImageCard } from "@/types/ImageCard";
import { IconCard } from "@/types/IconCard";
import { DataCard } from "@/types/DataCard";

export type MediaCard = 
| ImageCard
| IconCard
| DataCard;

export type MediaCardProps = {
  _key: string;
}
