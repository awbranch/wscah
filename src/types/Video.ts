import { ComponentProps } from "@/types/Component";

export type VideoProvider = "youtube" | "vimeo";

export type Video = ComponentProps & {
  _type: "video";
  provider: VideoProvider;
  videoId: string;
  width: number;
  height: number;
};
