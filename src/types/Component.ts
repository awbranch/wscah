import { Palette } from "@/types/Palette";
import { Alert } from "@/types/Alert";
import { Announcement } from "@/types/Announcement";
import { CallToAction } from "@/types/CallToAction";
import { ContactForm } from "@/types/ContactForm";
import { FlexBox } from "@/types/FlexBox";
import { Hero } from "@/types/Hero";
import { IFrame } from "@/types/IFrame";
import { LatestNews } from "@/types/LatestNews";
import { MediaCardSet } from "@/types/MediaCardSet";
import { NewsTabs } from "@/types/NewsTabs";
import { ProposedText } from "@/types/ProposedText";
import { ReportSet } from "@/types/ReportSet";
import { TeamTabs } from "@/types/TeamTabs";
import { Article } from "@/types/Text";
import { Timeline } from "@/types/Timeline";
import { Video } from "@/types/Video";

export type Component =
  | Alert
  | Announcement
  | CallToAction
  | ContactForm
  | FlexBox
  | Hero
  | IFrame
  | LatestNews
  | MediaCardSet
  | NewsTabs
  | ProposedText
  | ReportSet
  | TeamTabs
  | Article
  | Timeline
  | Video;

export type ComponentProps = {
  _key: string;

  // The block's id and palette is assigned to the component when reading from Sanity
  blockId?: string;
  blockPalette: Palette;

  // // Optional vertical spacing around component
  // spacing?: "sm" | "md" | "lg";

  // // Optional max width of component. If not set it will inherit from the page
  // maxWidth?: MaxWidth;
};
