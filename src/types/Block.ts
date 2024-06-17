import { AnnounceBlock } from "@/types//AnnounceBlock";
import { CallToActionBlock } from "@/types//CallToActionBlock";
import { DataCardBlock } from "@/types//DataCardBlock";
import { HeroBlock } from "@/types//HeroBlock";
import { ImageCardBlock } from "@/types//ImageCardBlock";

export type Block =
  | AnnounceBlock
  | CallToActionBlock
  | DataCardBlock
  | HeroBlock
  | ImageCardBlock;
