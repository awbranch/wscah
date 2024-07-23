import { Alert } from "@/types/Alert";
import { Announcement } from "@/types/Announcement";
import { Article } from "@/types/Article";
import { ButtonRow } from "@/types/ButtonRow";
import { CallToAction } from "@/types/CallToAction";
import { ComponentSetReference } from '@/types/ComponentSetReference';
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
import { Timeline } from "@/types/Timeline";
import { Title } from "@/types/Title";
import { Video } from "@/types/Video";
import { Palette } from "@/types/Palette";

export type Component =
  | Alert
  | Announcement
  | Article
  | ButtonRow
  | CallToAction
  | ComponentSetReference
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
  | Timeline
  | Title
  | Video;

export type ComponentProps = {
  _key: string;

  // The block's id and palette is assigned to the component when reading from Sanity
  blockId?: string;
  blockPalette?: Palette;
};
