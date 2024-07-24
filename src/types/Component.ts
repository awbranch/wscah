import { Alert } from "@/types/Alert";
import { Announcement } from "@/types/Announcement";
import { Article } from "@/types/Article";
import { ButtonRow } from "@/types/ButtonRow";
import { CallToAction } from "@/types/CallToAction";
import { ComponentSetReference } from "@/types/ComponentSetReference";
import { ContactForm } from "@/types/ContactForm";
import { EmbeddedHtml } from "@/types/EmbeddedHtml";
import { FlexBox } from "@/types/FlexBox";
import { Hero } from "@/types/Hero";
import { LatestNews } from "@/types/LatestNews";
import { MediaCardSet } from "@/types/MediaCardSet";
import { NewsTabs } from "@/types/NewsTabs";
import { Palette } from "@/types/Palette";
import { ProposedText } from "@/types/ProposedText";
import { ReportSet } from "@/types/ReportSet";
import { TeamTabs } from "@/types/TeamTabs";
import { Timeline } from "@/types/Timeline";
import { Title } from "@/types/Title";
import { Video } from "@/types/Video";

export type Component =
  | Alert
  | Announcement
  | Article
  | ButtonRow
  | CallToAction
  | ComponentSetReference
  | ContactForm
  | EmbeddedHtml
  | FlexBox
  | Hero
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
